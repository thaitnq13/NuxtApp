<script setup>
import { MOCK_DATA } from '~/utils/constants';
let data = [...MOCK_DATA];
data.map(item => {
    let rowSpanProject = 0;
    item.elements.map(element => {
        let rowSpanElement = 0;
        element.arrayCondition.map(condition1 => {
            let rowSpanCondition1 = 0;
            condition1.dataCondition01.map(condition2 => {
                let rowSpanCondition2 = 0;
                condition2.dataCondition02.map(condition3 => {
                    rowSpanProject += condition3.testcase.length;
                    rowSpanElement += condition3.testcase.length;
                    rowSpanCondition1 += condition3.testcase.length;
                    rowSpanCondition2 += condition3.testcase.length;
                    condition3['rowSpanCondition3'] = condition3.testcase.length;
                });
                condition2['rowSpanCondition2'] = rowSpanCondition2;
            });
            condition1['rowSpanCondition1'] = rowSpanCondition1;
        });
        element['rowSpanElement'] = rowSpanElement;
    });
    item['rowSpanProject'] = rowSpanProject;
});
</script>

<template>
    <div>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Project Name</th>
                    <th class="text-left">Element Name</th>
                    <th class="text-left">Condition 1</th>
                    <th class="text-left">Condition 2</th>
                    <th class="text-left">Condition 3</th>
                    <th class="text-left">Expected result</th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                    <th class="text-left">Result</th>
                    <th class="text-left">Confirmation date</th>
                    <th class="text-left">Tester</th>
                    <th class="text-left">Evidence No</th>
                    <th class="text-left">Retest</th>
                    <th class="text-left">Developer</th>
                    <th class="text-left">Date Confirmed</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, dataIndex) in data">
                    <template v-for="(element, idx) in item.elements">
                        <template v-for="(condition1, idx1) in element.arrayCondition">
                            <template v-for="(condition2, idx2) in condition1.dataCondition01">
                                <template v-for="(condition3, idx3) in condition2.dataCondition02">
                                    <template v-for="(testcase, index) in condition3.testcase">
                                        <tr>
                                            <template
                                                v-if="
                                                    idx === 0 && idx1 === 0 && idx2 === 0 && idx3 === 0 && index === 0
                                                "
                                            >
                                                <td :rowspan="item?.rowSpanProject">{{ item?.projectName }}</td>
                                            </template>

                                            <template v-if="idx1 === 0 && idx2 === 0 && idx3 === 0 && index === 0">
                                                <td :rowspan="element?.rowSpanElement">{{ element?.elementName }}</td>
                                            </template>
                                            <template v-if="idx2 === 0 && idx3 === 0 && index === 0">
                                                <td :rowspan="condition1?.rowSpanCondition1">
                                                    {{ condition1.condition01Name }}
                                                </td>
                                            </template>
                                            <template v-if="idx3 === 0 && index === 0">
                                                <td :rowspan="condition2.rowSpanCondition2">
                                                    {{ condition2.condition02Name }}
                                                </td>
                                            </template>
                                            <template v-if="index === 0">
                                                <td :rowspan="condition3.rowSpanCondition3">
                                                    {{ condition3.condition03Name }}
                                                </td>
                                            </template>
                                            <td>
                                                {{ testcase.dataConditionName }}
                                            </td>
                                            <td>{{ testcase.system }}</td>
                                            <td>{{ testcase.level }}</td>
                                            <td>{{ testcase.result }}</td>
                                            <td>{{ testcase.dateTested }}</td>
                                            <td>{{ testcase.tester }}</td>
                                            <td>{{ testcase.evidenceNo }}</td>
                                            <td>{{ testcase.retest }}</td>
                                            <td>{{ testcase.dev }}</td>
                                            <td>{{ testcase.dateTested }}</td>
                                        </tr>
                                    </template>
                                </template>
                            </template>
                        </template>
                    </template>
                </template>
            </tbody>
        </v-table>
    </div>
</template>

<style scoped>
table,
td {
    border: 1px solid #000;
}
</style>
