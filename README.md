# Socket io - Node js - Puppeteer - Aws S3 - MongeDB Atlas
## Buscando imagens apartir de uma url
Apartir de uma url colacada na página index.html você terá o retorno das iamgens desta pagina em miniatura.
#### O que acontece exatamente:
- O **Socket io** estabelece uma conexão entre servidor e cliente.
- Por meio desta conexão o back-end recebe a url da página.
- O **Puppeteer** recebe essa url e extrai as url's das imagens.
- Ele envia para o controller e este envia uma url por vez para:
1. Salvar localmente
2. Salvar na **Aws S3** o arquivo desta imagem
3. Salvar a url da imagem que esta na **Aws S3** em um banco de dados
	que é criado no **MongoDB Atlas**
4. Por último o **Socket io** envia para o front-end a url da imagem na **Aws S3**
	e então é renderizado na página index.html
##### Veja como fica no front-end
[![](https://i.imgur.com/G6Lyc9b.png)](https://imgur.com/G6Lyc9b)

------------


[![](https://i.imgur.com/pGZcDlY.png)](https://imgur.com/pGZcDlY)

#### Para usar este projeto você precisa:
##### Instalar as seguintes depedencias do Node:
###### 1. npm install 
	"aws-sdk": "^2.724.0",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "mongodb": "^3.6.0",
    "mongoose": "^5.9.26",
    "puppeteer": "^5.2.1",
    "request": "^2.88.2",
    "socket.io": "^2.3.0"
##### Configurar Aws S3
###### - src/models/awsS3.js
	const BUCKET = 'YOU-BUCKET'
    const REGION = 'YOU-REGION'
    const ACCESS_KEY = 'YOU-ACCESS_KEY'
    const SECRET_KEY = 'YOU-SECRET_KEY'
##### Configurar o MongoDB Atlas
- substitua **username** e **password**
###### - src/database/index.js
		const connectionString = "mongodb+srv://username:password@cluster0.lkum6.mongodb.net/Image?retryWrites=true&w=majority"