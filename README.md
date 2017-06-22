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

Cahier des charges :
-------
[Lien du cahier des charges](doc/cahierDesCharges.md)

Fonctionnalités :
-------

Boutique de téléphones qui permet de voir des models de téléphones choisir des options ou/et un abonnement avec connection (non-achevé).