export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      guestBook: {
        Row: {
          comment: string | null
          created_at: string
          id: number
          name: string | null
          password: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: number
          name?: string | null
          password?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: number
          name?: string | null
          password?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
