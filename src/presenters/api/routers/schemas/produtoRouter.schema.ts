import { z } from "zod";

export type AdicionarItemPayload = z.infer<typeof adicionarItemSchema>;
export type AdicionarItemBody = AdicionarItemPayload["body"];
export type AdicionarItemParams = AdicionarItemPayload["params"];

/** Adicionar Item */
export const adicionarItemSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "O id do pedido é obrigatório",
        invalid_type_error: "O id pedido deve ser um texto",
      })
      .uuid({ message: "O id do pedido deve ser UUID" }),
  }),
  body: z.object({
    produtoId: z
      .string({
        required_error: "O id do produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id do produto deve ser UUID" }),
    quantidade: z
      .number({
        required_error: "Quantidade é obrigatória",
        invalid_type_error: "Quantidade deve ser um número",
      })
      .positive({ message: "Quantidade deve ser maior que zero" }),
    observacao: z
      .string({ invalid_type_error: "Observação deve ser um texto" })
      .optional(),
  }),
});

/** Cria Produto */
export const CriaProdutoSchema = z.object({
  body: z.object({
    nome: z
      .string({
        required_error: "O nome é obrigatório",
        invalid_type_error: "id inválido",
      }),
    preco: z
      .number({
        required_error: "O preco é obrigatório",
        invalid_type_error: "O preço deve ser um numero",
      })
      .positive({ message: "valor deve ser maior que zero" }),
    descricao: z
      .string(),
    categoriaId: z
      .string({
        required_error: "O id da categoria é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "categoriaId deve ser UUID" }),
  }),
});

export type CriaProdutoPayload = z.infer<typeof CriaProdutoSchema>;
export type CriaProdutoBody = CriaProdutoPayload["body"];


/** Lista Produto */
export const ListaProdutoSchema = z.object({
  params: z.object({
    categoriaId: z
      .string({
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" })
      .optional(),
  }),
});
export type ListaProdutoPayload = z.infer<typeof ListaProdutoSchema>;
export type ListaProdutoParams = ListaProdutoPayload["params"];

/** retorna Produto */
export const RetornaProdutoSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "O id do Produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" }),
  }),
});

export type RetornaProdutoPayload = z.infer<typeof RetornaProdutoSchema>;
export type RetornaProdutoParams = RetornaProdutoPayload["params"];


/** Deleta Produto */
export const DeletaProdutoSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "O id do Produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" }),
  }),
});

export type DeletaProdutoPayload = z.infer<typeof DeletaProdutoSchema>;
export type DeletaProdutoBody = DeletaProdutoPayload["params"];

/** Edita Produto */
export const EditaProdutoSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "O Id do produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" }),
  }),
  body: z.object({
    nome: z
      .string({
        required_error: "O nome é obrigatório",
        invalid_type_error: "id inválido",
      })
      .optional(),
    preco: z
      .number({
        required_error: "O preco é obrigatório",
        invalid_type_error: "O id deve ser um numer",
      })
      .optional(),
    descricao: z
      .string()
      .optional(),
    categoriaId: z
      .string({
        required_error: "O id da categoria é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "categoriaId deve ser UUID" })
  }),
});

export type EditaProdutoPayload = z.infer<typeof EditaProdutoSchema>;
export type EditaProdutoParams = EditaProdutoPayload["params"];
export type EditaProdutoBody = EditaProdutoPayload["body"];


/** Deleta imagem Produto */
export const RemoveImagemSchema = z.object({
  params: z.object({
    idProduto: z
      .string({
        required_error: "O id do Produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" }),
    idImagem: z
      .string({
        required_error: "O id da imagem é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id da imagem deve ser UUID" }),
  }),
});

export type RemoveImagemPayload = z.infer<typeof RemoveImagemSchema>;
export type RemoveImagemParams = RemoveImagemPayload["params"];

/** Edita Produto */
export const AdicionaImagenSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "O id do produto é obrigatório",
        invalid_type_error: "id inválido",
      })
      .uuid({ message: "O id deve ser UUID" }),
  }),
  body: z.object({
  }),
});

export type AdicionaImagenPayload = z.infer<typeof AdicionaImagenSchema>;