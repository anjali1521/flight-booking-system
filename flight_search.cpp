#include <iostream>
#include <vector>
#include <algorithm>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

void sortFlights(json &flights, const std::string &sortBy) {
  std::sort(flights.begin(), flights.end(), [&](const auto &a, const auto &b) {
    return sortBy == "price" ? a["price"]["total"] < b["price"]["total"] : false;
  });
}

int main(int argc, char *argv[]) {
  json flights = json::parse(argv[1]);
  sortFlights(flights, argv[2]);
  std::cout << flights.dump();
  return 0;
}