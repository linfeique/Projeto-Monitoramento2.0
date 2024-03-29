﻿using BackEnd.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace BackEnd.Interfaces
{
    interface IEquipamentoRepository
    {
        void Cadastrar(Equipamento equipamento);

        void Atualizar(Equipamento equipamento);

        List<Equipamento> Listar();

        string MonitoramentoManual(string ipEquipamento);
    }
}
