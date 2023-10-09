<script src="https://web3forms.com/client/script.js" async defer>

// import image from "";
</script>

<section id="contact">
  <div class="big-wrapper">
  <div class="wrapper-block">
  <form action="https://api.web3forms.com/submit" method="POST">
    <input
      type="hidden"
      name="access_key"
      value="462cfcd8-e464-47cd-8317-89825ed7a6f2"
    />

    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="EMAIL ADRES"
      required
    />

    <label for="Voornaam">Voornaam:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder="VOORNAAM"
      required
    />

    <label for="Achternaam">Achternaam</label>
    <input
      type="text"
      id="surname"
      name="surname"
      placeholder="ACHTERNAAM"
      required
    />

    <label for="Vraag">Bericht</label>
    <textarea
      id="Motivatie"
      name="Motivatie"
      placeholder="MOTIVATIE"
      rows="4"
      required
    />

    <input
      type="hidden"
      name="redirect"
      value="https://web3forms.com/success"
    />

    <!-- <input class="file-upload" type="file" id="myFile" name="filename" > -->

    <button class="send" type="submit">
      Versturen
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10.2317H20M20 10.2317L11.3333 0.99997M20 10.2317L11.3333 19"
          stroke=""
          stroke-width="1.5"
        />
      </svg></button
    >
  </form>
</div>
<img src="https://images.unsplash.com/photo-1605449670493-ca1d812d0488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="">

</div>
</section>

<style>
  section {
    padding-top: 2em;
    /* height: 95vh; */
    /* padding-right: 30%; */
    width: 100%;
    padding-bottom: 1em;
    padding: 2em;
  }

  .big-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 1em;
    padding: 2em;
  }
  
  .wrapper-block {
    width: 49%;
    padding-right: 2em;

  }

  h4 {
    font-size: 1.5em;
    text-transform: uppercase;
  }

  h6 {
    font-size: 2em;
    color: var(--main-blue);
    margin: 0.3rem 0;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    opacity: 0;
  }

  input {
    height: 6rem;
    border: 0px;
    border-bottom: 3px solid var(--color-primair);
    background-color: #ffffff00;
    color: var(--color-primair);
    display: flex;
    justify-content: baseline;
    font-size: 2rem;
    outline: none;
  }

  select {
    border: 2px solid var(--color-primair);
    width: max-content;
    font-size: 1em;
    padding: .4em 1em;
    padding-right: 1em;
    font-weight: 500;
    background-color: #ffffff00;
    border-radius: 1em;

  }

  textarea {
    height: 16rem;
    border: 0px;
    border-bottom: 3px solid var(--color-primair);
    background-color: #ffffff00;
    color: var(--color-primair);
    display: flex;
    justify-content: baseline;
    font-size: 2rem;
    font-family: "Lato", sans-serif;
    outline: none;
  }

  textarea::placeholder {
    color: var(--color-primair);
  }

  input::placeholder {
    background-color: none;
    font-size: 2rem;
    color: var(--color-primair);
  }

  input:focus {
    color: var(--color-secundair);
  }

  .file-upload {
    font-size: 1em;
    border-bottom: 0px;
    margin-top: 1em;
  }

  .send {
    border: none;
    padding: 0.2em 1em 0.5em;
    background-color: var(--color-secundair);
    /* border: 1px solid var(--color-primair); */
    color: var(--main-dark);
    border-radius: 2em;
    font-size: 1em;
    cursor: pointer;
    transition: 0.3s;
    width: max-content;
    margin: 3em 0;
    margin-bottom: 0;
  }

  .send:hover {
    background-color: var(--color-primair);
    color: white;
    stroke: var(--main-dark);
    /* border: 1px solid var(--color-secundair); */
  }

  svg {
    transition: 0.3s;
    transform: translateY(5px) scale(0.8);
    stroke: var(--main-dark);
  }

  .send:hover svg {
    transform: translateX(5px) translateY(5px) scale(0.8);
    /* fill: var(--main-offwhite); */
    stroke: white;
  }

  img {
    width: 52%;
    height: 80vh;
    border-radius: 1em;
  }

  @media screen and (max-width: 1122px) {
  }

  @media screen and (max-width: 700px) {
    section {
      padding-top: 1em;
      padding-right: 1em;
    }

    .big-wrapper {
    flex-direction: column;

  }

    
  .wrapper {
    width: 100%;
    padding-right: 2em;

  }

  img {
    width: 100%;
    height: 40vh;
    border-radius: 1em;
    margin-top: 1em;
  }

  

    input {
      height: 2rem;
      border-bottom: 2px solid var(--color-primair);
      font-size: 1.5rem;
    }

    textarea {
      height: 30vh;
      border-bottom: 2px solid var(--color-primair);
      font-size: 1.5rem;
    }

    input::placeholder {
      background-color: none;
      font-size: 1.5rem;
      color: var(--color-primair);
    }
  }
</style>
