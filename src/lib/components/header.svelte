<header>
	<div class="logo">
		<img src="plantswaplogo.png" alt="" width="" height="100%" />
	</div>
	<div class="links" />

	<nav role="navigation">
		<div id="menuToggle">
			<input type="checkbox" />

			<span />
			<span />
			<span />

			<ul id="menu">
				<a href="/">Home</a>
				<a href="/">Stekjes</a>
			</ul>
		</div>
	</nav>
</header>

<style>

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 10vh;
		-webkit-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		box-shadow: 0px 1px -5px 0px rgba(66, 68, 90, 1);
	}

	.logo {
		padding: 1rem;
		height: 100%;
		width: 30%;
	}

	/* Hamburger menu */

	nav {
		padding: 1rem;
	}

	#menuToggle {
		position: relative;
		display: block;
		z-index: 1;
		user-select: none;
	}

	#menuToggle a {
		text-decoration: none;
	}

	#menuToggle input {
		display: block;
		position: absolute;
		height: 40px;
		width: 32px;
		cursor: pointer;
		opacity: 0;
		z-index: 2;
	}

	#menuToggle span {
		background: var(--color-primair);
		display: block;
		position: relative;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #ffffff;
	}

	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	#menu {
		position: absolute;
		width: 60vw;
		height: 60vh;
		top: 0;
		right: 0;
		margin: -100px -16px 0 0;
		padding-top: 125px;
		background: var(--color-primair);
		list-style-type: none;  
    display: none;
	}

	#menu a {
		color: white;
		padding: 1rem;
	}

	#menuToggle input:checked ~ ul {
    display: block;
	}

  @media (min-width: 413px) {
    #menuToggle {
      display: none;
    }
  }
</style>
