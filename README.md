# Tel4G #
## Installation ##

Todo List :
-------

* Faire la todo list du projectTel4gApi avant celui ci.
* Cloner le depot sur son poste.
* Créer le host virtuel "local.tel4g".
 
```
#!vhost

<VirtualHost *:80>
	ServerName local.tel4g
	DocumentRoot C:/wamp64/www/projectTel4g
		<Directory  "C:/wamp64/www/projectTel4g">
	</Directory>
</VirtualHost>
```
* Modifier le chemin du  Directory et DocumentRoot si le projet n'est dans celle indiquée.
