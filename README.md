# DevOps Assessment Submission – Vignesh R

This repository contains all DevOps assessment assignments, covering CI/CD, Docker, Kubernetes, GitOps, monitoring, and infrastructure automation. Everything is centralized in this repo for easy setup and evaluation.

## 🎯 Assignments Covered

| # | Assignment | Description |
|---|------------|-------------|
| 1 | CI/CD Pipeline with Jenkins + Docker | Build, test, and run a Dockerized app using Jenkins |
| 2 | Kubernetes Deployment | Deploy Dockerized app using Minikube or local K8s |
| 3 | GitHub Actions CI/CD | Automated build/test and deployment to Minikube |
| 4 | Infrastructure Automation | Docker Compose to bring up Jenkins, Redis, Nginx, and app |
| 5 | Monitoring with Prometheus + Grafana | Metrics collection and dashboard visualization |
| 6 | Simulated Production Incident & RCA | Debugging buggy app and documenting root cause |

---

## 🚀 Setup Instructions

### 1️⃣ CI/CD Jenkins + Docker
1. Start Jenkins:
```bash
docker-compose up -d
