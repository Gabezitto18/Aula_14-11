function Footer() {
  //função pra data
  const ano = new Date().getFullYear();

  return (
    <footer>
      <p> Meu site em React - Técnico em Desenvolvimento de Sistemas- {ano}</p>
    </footer>
  ); 
}

export default Footer;