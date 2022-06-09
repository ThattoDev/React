import "./style.css"
const SegundoComponente = () => {
    return (
        <div className = "App">
            <p>Login</p>
            <input id="login" type="text" name="" placeholder="Insira seu nome de usuário" required />
            <p>Senha</p>
             <input id="senha" type="password" name="" placeholder="Insira a senha"  required/> 
            
             <input type="button" name="" value="Login" class="btn" id="btn-login" />

        </div>
        

    );
}

export default SegundoComponente;