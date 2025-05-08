import { createResource, createSignal } from "solid-js";
import './style.scss';
import './style-mobile.scss';
import gamesData from './db.json';

export default function Game() {
    const [games] = createResource(() => gamesData.games);
    const [linkGame, setLinkGame] = createSignal(null);

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <Show when={games()} fallback={<p>Loading ...</p>}>
            {!linkGame() && (<p class='p-notice'>Click & Play !</p>)}
            <main>
                {linkGame() && (<a href="./" class='a-notice'>← Play another game</a>)}
                {!linkGame() && <div class={`divGames ${linkGame() ? 'active' : ''}`}>
                    <For each={games()}>
                        {(game) => (
                            <img src={game.src} alt={game.title} title={game.title} onclick={() => {
                                setLinkGame(game.link);
                                scrollToTop();
                            }} />
                        )}
                    </For>
                </div>}
                {linkGame() && (<aside>
                    <iframe src={'https://www.retrogames.cc/embed/' + linkGame() + '.html'} width="100%" height="100%" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                </aside>)}
            </main>
        </Show>
    )
}