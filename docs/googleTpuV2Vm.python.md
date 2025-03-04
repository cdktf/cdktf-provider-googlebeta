# `googleTpuV2Vm` Submodule <a name="`googleTpuV2Vm` Submodule" id="@cdktf/provider-google-beta.googleTpuV2Vm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuV2Vm <a name="GoogleTpuV2Vm" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm google_tpu_v2_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2Vm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runtime_version: str,
  accelerator_config: GoogleTpuV2VmAcceleratorConfig = None,
  accelerator_type: str = None,
  cidr_block: str = None,
  data_disks: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network_config: GoogleTpuV2VmNetworkConfig = None,
  network_configs: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]] = None,
  project: str = None,
  scheduling_config: GoogleTpuV2VmSchedulingConfig = None,
  service_account: GoogleTpuV2VmServiceAccount = None,
  shielded_instance_config: GoogleTpuV2VmShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: GoogleTpuV2VmTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.name">name</a></code> | <code>str</code> | The immutable name of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.acceleratorType">accelerator_type</a></code> | <code>str</code> | TPU accelerator type for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | The CIDR block that the TPU node will use when selecting an IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.dataDisks">data_disks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.description">description</a></code> | <code>str</code> | Text description of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.networkConfigs">network_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]</code> | network_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | scheduling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The GCP location for the TPU. If it is not provided, the provider zone is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.name"></a>

- *Type:* str

The immutable name of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#name GoogleTpuV2Vm#name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#runtime_version GoogleTpuV2Vm#runtime_version}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#accelerator_config GoogleTpuV2Vm#accelerator_config}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.acceleratorType"></a>

- *Type:* str

TPU accelerator type for the TPU.

'accelerator_type' cannot be used at the same time as
'accelerator_config'. If neither is specified, 'accelerator_type' defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#accelerator_type GoogleTpuV2Vm#accelerator_type}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.cidrBlock"></a>

- *Type:* str

The CIDR block that the TPU node will use when selecting an IP address.

This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#cidr_block GoogleTpuV2Vm#cidr_block}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.dataDisks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#data_disks GoogleTpuV2Vm#data_disks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.description"></a>

- *Type:* str

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#description GoogleTpuV2Vm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#labels GoogleTpuV2Vm#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#metadata GoogleTpuV2Vm#metadata}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network_config GoogleTpuV2Vm#network_config}

---

##### `network_configs`<sup>Optional</sup> <a name="network_configs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.networkConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network_configs GoogleTpuV2Vm#network_configs}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}.

---

##### `scheduling_config`<sup>Optional</sup> <a name="scheduling_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.schedulingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#scheduling_config GoogleTpuV2Vm#scheduling_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#service_account GoogleTpuV2Vm#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#shielded_instance_config GoogleTpuV2Vm#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#tags GoogleTpuV2Vm#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#timeouts GoogleTpuV2Vm#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.zone"></a>

- *Type:* str

The GCP location for the TPU. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#zone GoogleTpuV2Vm#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig">put_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks">put_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs">put_network_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig">put_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount">put_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig">reset_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks">reset_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs">reset_network_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig">reset_scheduling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_accelerator_config` <a name="put_accelerator_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig"></a>

```python
def put_accelerator_config(
  topology: str,
  type: str
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig.parameter.topology"></a>

- *Type:* str

Topology of TPU in chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#topology GoogleTpuV2Vm#topology}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig.parameter.type"></a>

- *Type:* str

Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#type GoogleTpuV2Vm#type}

---

##### `put_data_disks` <a name="put_data_disks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks"></a>

```python
def put_data_disks(
  value: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig"></a>

```python
def put_network_config(
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  enable_external_ips: typing.Union[bool, IResolvable] = None,
  network: str = None,
  queue_count: typing.Union[int, float] = None,
  subnetwork: str = None
) -> None
```

###### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.canIpForward"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

###### `enable_external_ips`<sup>Optional</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.enableExternalIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.network"></a>

- *Type:* str

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

###### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.queueCount"></a>

- *Type:* typing.Union[int, float]

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

##### `put_network_configs` <a name="put_network_configs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs"></a>

```python
def put_network_configs(
  value: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]

---

##### `put_scheduling_config` <a name="put_scheduling_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig"></a>

```python
def put_scheduling_config(
  preemptible: typing.Union[bool, IResolvable] = None,
  reserved: typing.Union[bool, IResolvable] = None
) -> None
```

###### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig.parameter.preemptible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the node is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#preemptible GoogleTpuV2Vm#preemptible}

---

###### `reserved`<sup>Optional</sup> <a name="reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig.parameter.reserved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the node is created under a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#reserved GoogleTpuV2Vm#reserved}

---

##### `put_service_account` <a name="put_service_account" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount"></a>

```python
def put_service_account(
  email: str = None,
  scope: typing.List[str] = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount.parameter.email"></a>

- *Type:* str

Email address of the service account. If empty, default Compute service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#email GoogleTpuV2Vm#email}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount.parameter.scope"></a>

- *Type:* typing.List[str]

The list of scopes to be made available for this service account.

If empty, access to all
Cloud APIs will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#scope GoogleTpuV2Vm#scope}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_secure_boot: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#enable_secure_boot GoogleTpuV2Vm#enable_secure_boot}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}.

---

##### `reset_accelerator_config` <a name="reset_accelerator_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig"></a>

```python
def reset_accelerator_config() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_data_disks` <a name="reset_data_disks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks"></a>

```python
def reset_data_disks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_network_configs` <a name="reset_network_configs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs"></a>

```python
def reset_network_configs() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_scheduling_config` <a name="reset_scheduling_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig"></a>

```python
def reset_scheduling_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2Vm.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2Vm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2Vm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2Vm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleTpuV2Vm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleTpuV2Vm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuV2Vm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription">health_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode">multislice_node</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs">network_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints">network_endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource">queued_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms">symptoms</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput">accelerator_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput">data_disks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput">network_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput">scheduling_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput">service_account_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_config`<sup>Required</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleTpuV2VmAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a>

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `data_disks`<sup>Required</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks"></a>

```python
data_disks: GoogleTpuV2VmDataDisksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `health_description`<sup>Required</sup> <a name="health_description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription"></a>

```python
health_description: str
```

- *Type:* str

---

##### `multislice_node`<sup>Required</sup> <a name="multislice_node" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode"></a>

```python
multislice_node: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig"></a>

```python
network_config: GoogleTpuV2VmNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a>

---

##### `network_configs`<sup>Required</sup> <a name="network_configs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs"></a>

```python
network_configs: GoogleTpuV2VmNetworkConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a>

---

##### `network_endpoints`<sup>Required</sup> <a name="network_endpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints"></a>

```python
network_endpoints: GoogleTpuV2VmNetworkEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a>

---

##### `queued_resource`<sup>Required</sup> <a name="queued_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource"></a>

```python
queued_resource: str
```

- *Type:* str

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig"></a>

```python
scheduling_config: GoogleTpuV2VmSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a>

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount"></a>

```python
service_account: GoogleTpuV2VmServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleTpuV2VmShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `symptoms`<sup>Required</sup> <a name="symptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms"></a>

```python
symptoms: GoogleTpuV2VmSymptomsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts"></a>

```python
timeouts: GoogleTpuV2VmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a>

---

##### `accelerator_config_input`<sup>Optional</sup> <a name="accelerator_config_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput"></a>

```python
accelerator_config_input: GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `data_disks_input`<sup>Optional</sup> <a name="data_disks_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput"></a>

```python
data_disks_input: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput"></a>

```python
network_config_input: GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---

##### `network_configs_input`<sup>Optional</sup> <a name="network_configs_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput"></a>

```python
network_configs_input: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `scheduling_config_input`<sup>Optional</sup> <a name="scheduling_config_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput"></a>

```python
scheduling_config_input: GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput"></a>

```python
service_account_input: GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleTpuV2VmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuV2VmAcceleratorConfig <a name="GoogleTpuV2VmAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig(
  topology: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology">topology</a></code> | <code>str</code> | Topology of TPU in chips. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type">type</a></code> | <code>str</code> | Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology"></a>

```python
topology: str
```

- *Type:* str

Topology of TPU in chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#topology GoogleTpuV2Vm#topology}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#type GoogleTpuV2Vm#type}

---

### GoogleTpuV2VmConfig <a name="GoogleTpuV2VmConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runtime_version: str,
  accelerator_config: GoogleTpuV2VmAcceleratorConfig = None,
  accelerator_type: str = None,
  cidr_block: str = None,
  data_disks: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network_config: GoogleTpuV2VmNetworkConfig = None,
  network_configs: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]] = None,
  project: str = None,
  scheduling_config: GoogleTpuV2VmSchedulingConfig = None,
  service_account: GoogleTpuV2VmServiceAccount = None,
  shielded_instance_config: GoogleTpuV2VmShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: GoogleTpuV2VmTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name">name</a></code> | <code>str</code> | The immutable name of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | TPU accelerator type for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | The CIDR block that the TPU node will use when selecting an IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks">data_disks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description">description</a></code> | <code>str</code> | Text description of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs">network_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]</code> | network_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | scheduling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone">zone</a></code> | <code>str</code> | The GCP location for the TPU. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The immutable name of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#name GoogleTpuV2Vm#name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#runtime_version GoogleTpuV2Vm#runtime_version}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#accelerator_config GoogleTpuV2Vm#accelerator_config}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

TPU accelerator type for the TPU.

'accelerator_type' cannot be used at the same time as
'accelerator_config'. If neither is specified, 'accelerator_type' defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#accelerator_type GoogleTpuV2Vm#accelerator_type}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

The CIDR block that the TPU node will use when selecting an IP address.

This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#cidr_block GoogleTpuV2Vm#cidr_block}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks"></a>

```python
data_disks: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#data_disks GoogleTpuV2Vm#data_disks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#description GoogleTpuV2Vm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#labels GoogleTpuV2Vm#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#metadata GoogleTpuV2Vm#metadata}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig"></a>

```python
network_config: GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network_config GoogleTpuV2Vm#network_config}

---

##### `network_configs`<sup>Optional</sup> <a name="network_configs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs"></a>

```python
network_configs: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network_configs GoogleTpuV2Vm#network_configs}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}.

---

##### `scheduling_config`<sup>Optional</sup> <a name="scheduling_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig"></a>

```python
scheduling_config: GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#scheduling_config GoogleTpuV2Vm#scheduling_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount"></a>

```python
service_account: GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#service_account GoogleTpuV2Vm#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#shielded_instance_config GoogleTpuV2Vm#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#tags GoogleTpuV2Vm#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts"></a>

```python
timeouts: GoogleTpuV2VmTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#timeouts GoogleTpuV2Vm#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The GCP location for the TPU. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#zone GoogleTpuV2Vm#zone}

---

### GoogleTpuV2VmDataDisks <a name="GoogleTpuV2VmDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmDataDisks(
  source_disk: str,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk">source_disk</a></code> | <code>str</code> | Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode">mode</a></code> | <code>str</code> | The mode in which to attach this disk. |

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#source_disk GoogleTpuV2Vm#source_disk}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode in which to attach this disk.

If not specified, the default is READ_WRITE
mode. Only applicable to dataDisks. Default value: "READ_WRITE" Possible values: ["READ_WRITE", "READ_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#mode GoogleTpuV2Vm#mode}

---

### GoogleTpuV2VmNetworkConfig <a name="GoogleTpuV2VmNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkConfig(
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  enable_external_ips: typing.Union[bool, IResolvable] = None,
  network: str = None,
  queue_count: typing.Union[int, float] = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network">network</a></code> | <code>str</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork for the TPU node. |

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `enable_external_ips`<sup>Optional</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkConfigs <a name="GoogleTpuV2VmNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs(
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  enable_external_ips: typing.Union[bool, IResolvable] = None,
  network: str = None,
  queue_count: typing.Union[int, float] = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network">network</a></code> | <code>str</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork for the TPU node. |

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `enable_external_ips`<sup>Optional</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkEndpoints <a name="GoogleTpuV2VmNetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints()
```


### GoogleTpuV2VmNetworkEndpointsAccessConfig <a name="GoogleTpuV2VmNetworkEndpointsAccessConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig()
```


### GoogleTpuV2VmSchedulingConfig <a name="GoogleTpuV2VmSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig(
  preemptible: typing.Union[bool, IResolvable] = None,
  reserved: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the node is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved">reserved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the node is created under a reservation. |

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the node is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#preemptible GoogleTpuV2Vm#preemptible}

---

##### `reserved`<sup>Optional</sup> <a name="reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved"></a>

```python
reserved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the node is created under a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#reserved GoogleTpuV2Vm#reserved}

---

### GoogleTpuV2VmServiceAccount <a name="GoogleTpuV2VmServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmServiceAccount(
  email: str = None,
  scope: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email">email</a></code> | <code>str</code> | Email address of the service account. If empty, default Compute service account will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope">scope</a></code> | <code>typing.List[str]</code> | The list of scopes to be made available for this service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the service account. If empty, default Compute service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#email GoogleTpuV2Vm#email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

The list of scopes to be made available for this service account.

If empty, access to all
Cloud APIs will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#scope GoogleTpuV2Vm#scope}

---

### GoogleTpuV2VmShieldedInstanceConfig <a name="GoogleTpuV2VmShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig(
  enable_secure_boot: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#enable_secure_boot GoogleTpuV2Vm#enable_secure_boot}

---

### GoogleTpuV2VmSymptoms <a name="GoogleTpuV2VmSymptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmSymptoms()
```


### GoogleTpuV2VmTimeouts <a name="GoogleTpuV2VmTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuV2VmAcceleratorConfigOutputReference <a name="GoogleTpuV2VmAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput">topology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology">topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput"></a>

```python
topology_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology"></a>

```python
topology: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---


### GoogleTpuV2VmDataDisksList <a name="GoogleTpuV2VmDataDisksList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmDataDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2VmDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTpuV2VmDataDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]]

---


### GoogleTpuV2VmDataDisksOutputReference <a name="GoogleTpuV2VmDataDisksOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTpuV2VmDataDisks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>]

---


### GoogleTpuV2VmNetworkConfigOutputReference <a name="GoogleTpuV2VmNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward">reset_can_ip_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps">reset_enable_external_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount">reset_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_can_ip_forward` <a name="reset_can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward"></a>

```python
def reset_can_ip_forward() -> None
```

##### `reset_enable_external_ips` <a name="reset_enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps"></a>

```python
def reset_enable_external_ips() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_queue_count` <a name="reset_queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount"></a>

```python
def reset_queue_count() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput">can_ip_forward_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput">enable_external_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput">queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `can_ip_forward_input`<sup>Optional</sup> <a name="can_ip_forward_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput"></a>

```python
can_ip_forward_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips_input`<sup>Optional</sup> <a name="enable_external_ips_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput"></a>

```python
enable_external_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `queue_count_input`<sup>Optional</sup> <a name="queue_count_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput"></a>

```python
queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips`<sup>Required</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---


### GoogleTpuV2VmNetworkConfigsList <a name="GoogleTpuV2VmNetworkConfigsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2VmNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTpuV2VmNetworkConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]]

---


### GoogleTpuV2VmNetworkConfigsOutputReference <a name="GoogleTpuV2VmNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward">reset_can_ip_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps">reset_enable_external_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount">reset_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_can_ip_forward` <a name="reset_can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward"></a>

```python
def reset_can_ip_forward() -> None
```

##### `reset_enable_external_ips` <a name="reset_enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps"></a>

```python
def reset_enable_external_ips() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_queue_count` <a name="reset_queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount"></a>

```python
def reset_queue_count() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput">can_ip_forward_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput">enable_external_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput">queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `can_ip_forward_input`<sup>Optional</sup> <a name="can_ip_forward_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput"></a>

```python
can_ip_forward_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips_input`<sup>Optional</sup> <a name="enable_external_ips_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput"></a>

```python
enable_external_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `queue_count_input`<sup>Optional</sup> <a name="queue_count_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput"></a>

```python
queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips`<sup>Required</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTpuV2VmNetworkConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>]

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigList <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmNetworkEndpointsAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a>

---


### GoogleTpuV2VmNetworkEndpointsList <a name="GoogleTpuV2VmNetworkEndpointsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2VmNetworkEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleTpuV2VmNetworkEndpointsOutputReference <a name="GoogleTpuV2VmNetworkEndpointsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig"></a>

```python
access_config: GoogleTpuV2VmNetworkEndpointsAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmNetworkEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a>

---


### GoogleTpuV2VmSchedulingConfigOutputReference <a name="GoogleTpuV2VmSchedulingConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible">reset_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved">reset_reserved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preemptible` <a name="reset_preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible"></a>

```python
def reset_preemptible() -> None
```

##### `reset_reserved` <a name="reset_reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved"></a>

```python
def reset_reserved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput">preemptible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput">reserved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved">reserved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemptible_input`<sup>Optional</sup> <a name="preemptible_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput"></a>

```python
preemptible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reserved_input`<sup>Optional</sup> <a name="reserved_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput"></a>

```python
reserved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved"></a>

```python
reserved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---


### GoogleTpuV2VmServiceAccountOutputReference <a name="GoogleTpuV2VmServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput"></a>

```python
scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---


### GoogleTpuV2VmShieldedInstanceConfigOutputReference <a name="GoogleTpuV2VmShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---


### GoogleTpuV2VmSymptomsList <a name="GoogleTpuV2VmSymptomsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmSymptomsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2VmSymptomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleTpuV2VmSymptomsOutputReference <a name="GoogleTpuV2VmSymptomsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType">symptom_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `symptom_type`<sup>Required</sup> <a name="symptom_type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType"></a>

```python
symptom_type: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2VmSymptoms
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a>

---


### GoogleTpuV2VmTimeoutsOutputReference <a name="GoogleTpuV2VmTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_vm

googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTpuV2VmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>]

---



