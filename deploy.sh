#!/bin/sh
kubectl delete -f config/service.yaml --ignore-not-found
kubectl delete -f config/xmatters-distributors.yaml --ignore-not-found
kubectl apply -f config/service.yaml
kubectl apply -f config/xmatters-distributors.yaml