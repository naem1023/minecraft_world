# minecraft_world

- [ ] Basic Environment Setup using Voyager baseline
- [ ] Setup local llm via vllm or text-generation-inference
- [ ] Make single agent using Voyager baseline

## Installation Guides
### Prepare JDK 21>=
- For example, donwload the installation file from [https://www.oracle.com/java/technologies/downloads/#jdk22-mac](https://www.oracle.com/java/technologies/downloads/#jdk22-mac).

### Download and Run Fabric Minecraft Server Launcher on local
```sh
chmod 751 scritps/run*.sh

# If a server isn't installed 
scritps/download_run_server.sh

# IF a server is already install 
scritps/run_server.sh
```
### Set world spawn
Set the x y z position on the server command
```
/setworldspawn ~ ~ ~
```
### Make python environment
```sh
conda create -n mw python=3.9 -y
conda activate mw
make install
```

### Install mineflayer and additional minecraft interface library
```sh
npm install mineflayer

cd voyager/env/mineflayers
npm install -g npx
npm install
cd mineflayer-collectblock
npm install
npx tsc
cd ..
npm install
```


# Contribution
## Check lint
```sh
make pre-commit
```

# Citation
```bibtex
@article{wang2023voyager,
  title   = {Voyager: An Open-Ended Embodied Agent with Large Language Models},
  author  = {Guanzhi Wang and Yuqi Xie and Yunfan Jiang and Ajay Mandlekar and Chaowei Xiao and Yuke Zhu and Linxi Fan and Anima Anandkumar},
  year    = {2023},
  journal = {arXiv preprint arXiv: Arxiv-2305.16291}
}
```
