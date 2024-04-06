import { createResource, createSignal } from "solid-js";
import './style.scss';

const fetchGames = async () => {
    const res = await fetch('http://localhost:4500/games');
    return res.json();
}

export default function Game() {
    const [games] = createResource(fetchGames);
    const [linkGame, setLinkGame] = createSignal('16687-aladdin-usa');

    return (
        <Show when={games()} fallback={<p>Loading ...</p>}>
            <main>
                <div class='divGames'>
                    <For each={games()}>
                        {(game) => (
                            <div onclick={() => setLinkGame(game.link)}>
                                <img src={game.src} />
                            </div>
                        )}
                    </For>
                </div>
                <aside>
                    <iframe src={'https://www.retrogames.cc/embed/' + linkGame() + '.html'} width="100%" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                </aside>
            </main>
        </Show>
    )
}