import json
import matplotlib.pyplot as plt
from collections import defaultdict

data = [
    {"date": "15/02/2025", "workout": "LOWER B", "exercises": {"stiff": [160, 1], "legpress": [200, 10], "Mesa flexora": [80, 6], "extensora": [145, 8], "panturrilha": [90, 8]}},
    {"date": "17/02/2025", "workout": "UPPER A", "exercises": {"remada curvada": [110, 4], "supino": [45, 3], "puxada fechada": [96, 6], "fly": [102, 5], "elev lateral": [20, 4], "rosca direta": [26, 2], "frances V": [32, 8], "pulley V": [43, 6], "antebraço": [40, 1]}},
    {"date": "18/02/2025", "workout": "LOWER A", "exercises": {"terra": [3.5, 4], "agachamento": [45, 4], "mesa flexora": [85, 7]}},
    {"date": "20/02/2025", "workout": "LOWER A", "exercises": {"sarradinha": [200, 3]}},
    {"date": "21/02/2025", "workout": "UPPER A", "exercises": {"supino": [45, 3], "puxada aberta": [103, 5], "supino dec": [60, 6], "remada fechada": [90, 5], "elev lateral": [20, 4], "crucifixo inv": [87, 5], "rosca martelo": [40, 5], "frances corda": [32, 5], "rosca direta": [26, 3]}},
    {"date": "25/02/2025", "workout": "LOWER A", "exercises": {"terra": [70, 6], "agacho": [45, 4], "mesa flexora": [85, 7], "sarradinha": [100, 8], "panturrilha": [40, 6]}},
    {"date": "01/03/2025", "workout": "LOWER B", "exercises": {"stiff": [160, 3], "legpress": [260, 8], "mesa": [100, 4], "extensora": [80, 7], "panturrilha": [125, 6]}},
    {"date": "03/03/2025", "workout": "UPPER A", "exercises": {"remada curvada": [42.5, 5], "supino incl": [42.5, 5], "puxada fechada": [103, 5], "fly": [102, 4], "elev lateral": [20, 7], "rosca direta": [24, 6], "pulley v": [42, 8], "frances v": [32, 5], "rosca inv": [32, 7]}},
    {"date": "07/03/2025", "workout": "UPPER B", "exercises": {"supino inclinado": [42.5, 5], "puxada aberta": [103, 8], "fly": [102, 8], "remada fechada": [85, 6], "elev lateral": [20, 5], "crus inv": [95, 6], "rosca martelo": [36, 7], "frances corda": [31, 6], "scott": [45, 4]}}
]

def calculate_progression(training_data):
    progression = defaultdict(list)
    dates = []
    
    for entry in training_data:
        dates.append(entry["date"])
        for exercise, (weight, reps) in entry["exercises"].items():
            if progression[exercise]:
                last_weight, last_reps = progression[exercise][-1][:2]
                weight_progress = weight - last_weight
                reps_progress = reps - last_reps if weight == last_weight else 0
                progression[exercise].append((weight, reps, weight_progress, reps_progress))
            else:
                progression[exercise].append((weight, reps, 0, 0))
    
    return progression, dates

def plot_progression(progression_data, dates):
    for exercise, values in progression_data.items():
        weights = [entry[0] for entry in values]
        reps = [entry[1] for entry in values]
        
        plt.figure(figsize=(10, 5))
        plt.plot(dates[:len(weights)], weights, marker='o', label='Carga (kg)')
        plt.plot(dates[:len(reps)], reps, marker='s', label='Repetições')
        plt.xlabel("Data")
        plt.ylabel("Progresso")
        plt.title(f"Progresso de {exercise}")
        plt.xticks(rotation=45)
        plt.legend()
        plt.grid()
        plt.show()

progression_data, dates = calculate_progression(data)

# Salvar os dados como JSON
with open("progression.json", "w") as f:
    json.dump(progression_data, f, indent=4)

# Exibir os resultados
for exercise, values in progression_data.items():
    print(f"{exercise}:")
    for entry in values:
        print(f"  Carga: {entry[0]} kg, Repetições: {entry[1]}, Progresso carga: {entry[2]}, Progresso reps: {entry[3]}")
    print("\n")

# Gerar gráficos de progressão
plot_progression(progression_data, dates)
