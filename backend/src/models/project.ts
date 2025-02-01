// Na pasta models, criamos o modelo de dados do projeto, já que vamos utilizar o mongoose para manipular o banco de dados.

// Importações
import mongoose, { Document, Schema } from "mongoose"; // Importamos o mongoose e o tipo Document e o schema.

export interface IProject extends Document{
    name: string; // Nome do projeto
    startDate: Date; // Data de inicio do projeto
    endDate: Date; // Data de fim do projeto
    status: string; // Status do projeto
}

// aqui estamos criando o schema do projeto e definindo qual o seu tipo e os campos que são obrigatórios
const ProjectSchema: Schema = new Schema({
    name: { type: String, required: true }, 
    startDate: { type: Date, required: true }, 
    endDate: { type: Date, required: true }, 
    status: { type: String, required: true }
}) 

// exportamos o modelo de dados do projeto, para que possamos utiliza-lo em outros arquivos
export default mongoose.model<IProject>("project", ProjectSchema) 