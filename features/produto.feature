Feature: Produto

  Scenario: Cria um produto
    Given que exista categoria criada
    When enviar um requisicao para a api de criacao do produto
    Then deve retornar o produto criado
    And o status da api deve ser 201

  Scenario: Lista as produto
    Given que existe pelo menos um produto criado
    When enviar um requisicao para buscar a lista de produtos
    Then deve retornar a lista de produtos
    And o status da api deve ser 200

  Scenario: Busca um produto
    Given que existe pelo menos um produto criado
    When enviar um requisicao para buscar a produto
    Then deve retornar a produto
    And o status da api deve ser 200

  Scenario: Edita um produto
    Given que existe pelo menos um produto criado
    When enviar um requisicao para modificar a produto
    Then deve retornar a produtos modificada
    And o status da api deve ser 200

  Scenario: Deleta um produto
    Given que existe pelo menos um produto criado
    When enviar um requisicao para deletar a produto
    Then deve deletar com sucesso a produto
    And o status da api deve ser 200