@echo off
echo [Forilise]: Instalando todas as dependencias...
set /p install=[Forilise]: Deseja instalar com [yarn/npm]
if %install% equ yarn goto yarnInstall
if %install% equ npm goto npmInstall

:yarnInstall
yarn --force
echo [Forilise@Yarn]: Instalado com sucesso!
start uinswin.cmd
:npmInstall
npm i
echo [Forilise@Npm]: Instalado com sucesso!
start uinswin.cmd
