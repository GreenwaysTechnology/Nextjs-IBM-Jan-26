export default function GamesLayout(props){

    return <div id="GamesLayout">
          {/* Game Page  */}
          {props.children}
          {/* Teams  */}
          {props.team}
          {/* Player */}
          {props.player}
    </div>
}