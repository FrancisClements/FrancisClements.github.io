<script setup>
import {GithubSquare, ItchIo, Linkedin} from '@vicons/fa'
</script>

<template>
<footer>
    <div class="footer-txt">
        <p>Unlocking Possibilities</p>
    </div>
    <ul class="socials">
        <li class="s-icon">
            <a href="https://github.com/FrancisClements">
            <GithubSquare/>
            </a>
        </li>
        <li class="s-icon">
            <a href="https://francisclements.itch.io/">
            <ItchIo/>
            </a>
        </li>
        <li class="s-icon">
            <a href="https://www.linkedin.com/in/francis-clements-174667237"></a>
            <Linkedin/>
        </li>
    </ul>
    <div class="footer-txt">
        <p>2022 © Francis Ivan Clemente</p>
        <p>All Rights Reserved</p>
    </div>
</footer>
</template>

<style scoped>
footer{
    padding: 2.5rem 0;
    background-color: #fffbf6;
}

.socials{
    display: flex;
    gap: 15px;
    justify-content: center;
    margin: .5em 0;
}

.footer-txt p{
    text-align: center;
    margin: 0;
    font-size: .75em;
}

.footer-txt{
    margin-top: auto;
}

.s-icon{
    background-color: transparent;
    border-radius: 2em;
    padding: 8px;
    transition: .25s;
}

path{
    fill: var(--root-font-color);
}

svg{
    height: 2rem;
    display: block;
}

@media (hover: hover) {
    .s-icon:hover{
        background-color: rgba(191, 236, 255, .6);
    }
}

</style>