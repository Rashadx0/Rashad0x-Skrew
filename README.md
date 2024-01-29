def create_scoreboard(num_players):
    scoreboard = {}
    for i in range(1, num_players + 1):
        name = input(f"Enter name of player {i}: ")
        scoreboard[name] = 0
    return scoreboard

def update_score(scoreboard, player, points):
    if player in scoreboard:
        scoreboard[player] += points
    else:
        print("Player not found in the scoreboard.")

def display_scoreboard(scoreboard):
    print("\nScoreboard:")
    print("Player\t\tScore")
    for player, score in scoreboard.items():
        print(f"{player}\t\t{score}")

def main():
    num_players = int(input("Enter number of players: "))
    scoreboard = create_scoreboard(num_players)

    while True:
        display_scoreboard(scoreboard)
        choice = input("\nEnter player name to update score (q to quit): ")
        if choice.lower() == 'q':
            break
        else:
            try:
                points = int(input("Enter points to add: "))
                update_score(scoreboard, choice, points)
            except ValueError:
                print("Invalid input! Please enter a valid number for points.")

if __name__ == "__main__":
    main()
