Feature: Categoria

  Scenario: Cria uma categoria
    Given que o sistema esta ok
    When enviar uma requisicao para a api de criacao
    Then deve retornar a categoria criada
    And o status da api deve ser 201

  Scenario: Lista as Categoria
    Given que existe pelo menos uma categoria criada
    When enviar uma requisicao para buscar a lista
    Then deve retornar a lista de categorias
    And o status da api deve ser 200

  Scenario: Busca uma categoria
    Given que existe pelo menos uma categoria criada
    When enviar uma requisicao para buscar a categoria
    Then deve retornar a categoria
    And o status da api deve ser 200

  Scenario: Edita uma categoria
    Given que existe pelo menos uma categoria criada
    When enviar uma requisicao para modificar a categoria
    Then deve retornar a categorias modificada
    And o status da api deve ser 200

  Scenario: Deleta uma categoria
    Given que existe pelo menos uma categoria criada
    When enviar uma requisicao para deletar a categoria
    Then deve deletar com sucesso a categoria
    And o status da api deve ser 200