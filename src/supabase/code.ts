import { supabase } from '@/supabase/client';
import { Code } from '@/types/code';
import { Tables } from '@/types/supabase';

const table = 'codes';

export const getAllCodesByUser = async (id: string) => {
  const response: { data: any[]; error: string } = {
    data: [],
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('user_id', id)
      .order('created_at');

    if (error) response.error = error.message;

    if (data) response.data = data;

    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};

export const getCodeById = async (props: {
  codeId: number;
  userId: string;
}) => {
  const response: { data: Tables<'codes'> | null; error: string } = {
    data: null,
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', props.codeId)
      .eq('user_id', props.userId)
      .single<Tables<'codes'>>();

    if (error) {
      if (error.code === 'PGRST116') {
        response.error = 'The code item does not exist';
      } else {
        response.error = error.message;
      }
    }

    if (data) response.data = data;

    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};

export const addNewCode = async (values: Required<Omit<Code, 'id'>>) => {
  const response: { data: any; error: string } = {
    data: null,
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from(table)
      .insert(values)
      .select()
      .single();

    if (error) response.error = error.message;

    if (data) response.data = data;

    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};

export const updateCode = async ({
  userId,
  values: { id, ...values },
}: {
  values: Code;
  userId: string;
}) => {
  const response: { data: any; error: string } = {
    data: null,
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from(table)
      .update(values)
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) response.error = error.message;

    if (data) response.data = data;
    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};

export const deleteCode = async (props: { codeId: number; userId: string }) => {
  const response: { data: any; error: string } = {
    data: null,
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from(table)
      .delete()
      .eq('id', props.codeId)
      .eq('user_id', props.userId);

    if (error) response.error = error.message;

    if (data) response.data = data;
    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};
