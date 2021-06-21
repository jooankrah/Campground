#!/bin/bash

set -e

# Trick to get directory that script is located in
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

kubectl apply -f ./env-secret.yaml

kubectl apply -f ./campgroundApi-deployment.yaml

kubectl apply -f ./campgroundApi-service.yaml


kubectl apply -f ./frontend-deployment.yaml

kubectl apply -f ./frontend-service.yaml

kubectl apply -f ./reverseProxy-deployment.yaml

kubectl apply -f ./reverseProxy-service.yaml

kubectl apply -f ./userApi-deployment.yaml

kubectl apply -f ./userApi-service.yaml
