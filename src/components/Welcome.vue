<template>
  <div class="flex-grow relative box-border">
    <div
      class="absolute w-full h-full flex justify-center items-center box-border select-none"
    >
      <img src="/logo.svg" class="w-1/2 opacity-50" />
    </div>

    <div class="p-8 bg-transparent relative z-1 space-y-4">
      <h3 class="text-2xl text-gray-900 mb-4">Epi-MMB online comparison platform (OCP)</h3>

      <p>
        Welcome to the Epi-MMB online comparison platform. 
      </p>
      <p>
        The platform provides a comparison of many epi-macro models with standardized shock sizes. The shown results are pre-simulated.  
      </p>

      <div class="flex justify-center py-12">
        <div>
          <div>Select at least 1 model</div>
          <div>Select at least 1 variable</div>
          <div>Select at least 1 shock</div>
        </div>
      </div>

      <div>
        The results will be displayed in a weekly frequency.
      </div>  
      <div>
         In the top right corner of the model section you can filter the models by features to make your comparison easier.
      </div>
      <div>
         In the shocks section you can choose from different sizes of the share of initially infected people. If you choose the model-specific shock size, initial infections are set according to the value in the paper. Comparison of the results might be tougher. 
      </div>
      <div>
         In the variables section you can choose from a selection of standardized variables. All variables concerning the pandemic part of the model display the level of the variable, while all economic variables are defined as percentage deviations from the steady state values.
      </div>      
    </div>
  </div>
</template>
