<script setup>
import {GithubSquare, ItchIo, Linkedin} from '@vicons/fa'
</script>

<template>
<footer>
    <div class="footer-txt">
        <p>Unlocking Possibilities</p>
    </div>
    <ul class="icon-container">
        <li class="icon">
            <a href="https://github.com/FrancisClements">
            <GithubSquare/>
            </a>
        </li>
        <li class="icon">
            <a href="https://francisclements.itch.io/">
            <ItchIo/>
            </a>
        </li>
        <li class="icon">
            <a href="https://www.linkedin.com/in/francis-ivan-clemente">
            <Linkedin/>
            </a>
        </li>
    </ul>
    <div class="footer-txt">
        <p>2023 © Francis Ivan Clemente</p>
        <p>All Rights Reserved</p>
    </div>
</footer>
</template>

<style scoped>
footer{
    padding: 2.5rem 0;
    background-color: #fffbf6;
}

.footer-txt p{
    text-align: center;
    margin: 0;
    font-size: .75em;
}

.footer-txt{
    margin-top: auto;
}

path{
    fill: var(--root-font-color);
}

svg{
    height: 2rem;
    display: block;
}

</style>