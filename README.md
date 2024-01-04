# funcoes_uteis


#### Alterar versão do PHP no Ubuntu
```shell
sudo update-alternatives –-set php /usr/bin/php(versão)
```

#### Alterar hora sistema Linux Ubuntu
```shell
sudo timedatectl set-time '2024-01-04 11:27:50'
```

#### Habilitar chave no Agente SSH
```shell
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519
```
