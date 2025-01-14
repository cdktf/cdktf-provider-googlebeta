# `googleComputeInstanceGroupManager` Submodule <a name="`googleComputeInstanceGroupManager` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupManager <a name="GoogleComputeInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_instance_name: str,
  name: str,
  version: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]],
  all_instances_config: GoogleComputeInstanceGroupManagerAllInstancesConfig = None,
  auto_healing_policies: GoogleComputeInstanceGroupManagerAutoHealingPolicies = None,
  description: str = None,
  id: str = None,
  instance_lifecycle_policy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy = None,
  list_managed_instances_results: str = None,
  named_port: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]] = None,
  params: GoogleComputeInstanceGroupManagerParams = None,
  project: str = None,
  standby_policy: GoogleComputeInstanceGroupManagerStandbyPolicy = None,
  stateful_disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]] = None,
  stateful_external_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]] = None,
  stateful_internal_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]] = None,
  target_pools: typing.List[str] = None,
  target_size: typing.Union[int, float] = None,
  target_stopped_size: typing.Union[int, float] = None,
  target_suspended_size: typing.Union[int, float] = None,
  timeouts: GoogleComputeInstanceGroupManagerTimeouts = None,
  update_policy: GoogleComputeInstanceGroupManagerUpdatePolicy = None,
  wait_for_instances: typing.Union[bool, IResolvable] = None,
  wait_for_instances_status: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.baseInstanceName">base_instance_name</a></code> | <code>str</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.version">version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.autoHealingPolicies">auto_healing_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.instanceLifecyclePolicy">instance_lifecycle_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.listManagedInstancesResults">list_managed_instances_results</a></code> | <code>str</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.namedPort">named_port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.standbyPolicy">standby_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulDisk">stateful_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulExternalIp">stateful_external_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulInternalIp">stateful_internal_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetPools">target_pools</a></code> | <code>typing.List[str]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSize">target_size</a></code> | <code>typing.Union[int, float]</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetStoppedSize">target_stopped_size</a></code> | <code>typing.Union[int, float]</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSuspendedSize">target_suspended_size</a></code> | <code>typing.Union[int, float]</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstances">wait_for_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstancesStatus">wait_for_instances_status</a></code> | <code>str</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone that instances in this group should be created in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_instance_name`<sup>Required</sup> <a name="base_instance_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.baseInstanceName"></a>

- *Type:* str

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.version"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `all_instances_config`<sup>Optional</sup> <a name="all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.allInstancesConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `auto_healing_policies`<sup>Optional</sup> <a name="auto_healing_policies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.autoHealingPolicies"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.description"></a>

- *Type:* str

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_lifecycle_policy`<sup>Optional</sup> <a name="instance_lifecycle_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.instanceLifecyclePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `list_managed_instances_results`<sup>Optional</sup> <a name="list_managed_instances_results" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.listManagedInstancesResults"></a>

- *Type:* str

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `named_port`<sup>Optional</sup> <a name="named_port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.namedPort"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `standby_policy`<sup>Optional</sup> <a name="standby_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.standbyPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `stateful_disk`<sup>Optional</sup> <a name="stateful_disk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `stateful_external_ip`<sup>Optional</sup> <a name="stateful_external_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulExternalIp"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `stateful_internal_ip`<sup>Optional</sup> <a name="stateful_internal_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.statefulInternalIp"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `target_pools`<sup>Optional</sup> <a name="target_pools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetPools"></a>

- *Type:* typing.List[str]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `target_size`<sup>Optional</sup> <a name="target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSize"></a>

- *Type:* typing.Union[int, float]

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `target_stopped_size`<sup>Optional</sup> <a name="target_stopped_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetStoppedSize"></a>

- *Type:* typing.Union[int, float]

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `target_suspended_size`<sup>Optional</sup> <a name="target_suspended_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.targetSuspendedSize"></a>

- *Type:* typing.Union[int, float]

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `wait_for_instances`<sup>Optional</sup> <a name="wait_for_instances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `wait_for_instances_status`<sup>Optional</sup> <a name="wait_for_instances_status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.waitForInstancesStatus"></a>

- *Type:* str

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.zone"></a>

- *Type:* str

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig">put_all_instances_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies">put_auto_healing_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy">put_instance_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort">put_named_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams">put_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy">put_standby_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk">put_stateful_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp">put_stateful_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp">put_stateful_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion">put_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig">reset_all_instances_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies">reset_auto_healing_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy">reset_instance_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults">reset_list_managed_instances_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort">reset_named_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy">reset_standby_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk">reset_stateful_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp">reset_stateful_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp">reset_stateful_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools">reset_target_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize">reset_target_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize">reset_target_stopped_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize">reset_target_suspended_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances">reset_wait_for_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus">reset_wait_for_instances_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_all_instances_config` <a name="put_all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig"></a>

```python
def put_all_instances_config(
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}

---

##### `put_auto_healing_policies` <a name="put_auto_healing_policies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies"></a>

```python
def put_auto_healing_policies(
  health_check: str,
  initial_delay_sec: typing.Union[int, float]
) -> None
```

###### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies.parameter.healthCheck"></a>

- *Type:* str

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}

---

###### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies.parameter.initialDelaySec"></a>

- *Type:* typing.Union[int, float]

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

##### `put_instance_lifecycle_policy` <a name="put_instance_lifecycle_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```python
def put_instance_lifecycle_policy(
  default_action_on_failure: str = None,
  force_update_on_repair: str = None
) -> None
```

###### `default_action_on_failure`<sup>Optional</sup> <a name="default_action_on_failure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.defaultActionOnFailure"></a>

- *Type:* str

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#default_action_on_failure GoogleComputeInstanceGroupManager#default_action_on_failure}

---

###### `force_update_on_repair`<sup>Optional</sup> <a name="force_update_on_repair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.forceUpdateOnRepair"></a>

- *Type:* str

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#force_update_on_repair GoogleComputeInstanceGroupManager#force_update_on_repair}

---

##### `put_named_port` <a name="put_named_port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort"></a>

```python
def put_named_port(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]

---

##### `put_params` <a name="put_params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams"></a>

```python
def put_params(
  resource_manager_tags: typing.Mapping[str] = None
) -> None
```

###### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#resource_manager_tags GoogleComputeInstanceGroupManager#resource_manager_tags}

---

##### `put_standby_policy` <a name="put_standby_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy"></a>

```python
def put_standby_policy(
  initial_delay_sec: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `initial_delay_sec`<sup>Optional</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy.parameter.initialDelaySec"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy.parameter.mode"></a>

- *Type:* str

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

##### `put_stateful_disk` <a name="put_stateful_disk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk"></a>

```python
def put_stateful_disk(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]

---

##### `put_stateful_external_ip` <a name="put_stateful_external_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp"></a>

```python
def put_stateful_external_ip(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]

---

##### `put_stateful_internal_ip` <a name="put_stateful_internal_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp"></a>

```python
def put_stateful_internal_ip(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}.

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy"></a>

```python
def put_update_policy(
  minimal_action: str,
  type: str,
  max_surge_fixed: typing.Union[int, float] = None,
  max_surge_percent: typing.Union[int, float] = None,
  max_unavailable_fixed: typing.Union[int, float] = None,
  max_unavailable_percent: typing.Union[int, float] = None,
  min_ready_sec: typing.Union[int, float] = None,
  most_disruptive_allowed_action: str = None,
  replacement_method: str = None
) -> None
```

###### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.minimalAction"></a>

- *Type:* str

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.type"></a>

- *Type:* str

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}

---

###### `max_surge_fixed`<sup>Optional</sup> <a name="max_surge_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.maxSurgeFixed"></a>

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}

---

###### `max_surge_percent`<sup>Optional</sup> <a name="max_surge_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.maxSurgePercent"></a>

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}

---

###### `max_unavailable_fixed`<sup>Optional</sup> <a name="max_unavailable_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.maxUnavailableFixed"></a>

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}

---

###### `max_unavailable_percent`<sup>Optional</sup> <a name="max_unavailable_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.maxUnavailablePercent"></a>

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}

---

###### `min_ready_sec`<sup>Optional</sup> <a name="min_ready_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.minReadySec"></a>

- *Type:* typing.Union[int, float]

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}

---

###### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.mostDisruptiveAllowedAction"></a>

- *Type:* str

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}

---

###### `replacement_method`<sup>Optional</sup> <a name="replacement_method" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.replacementMethod"></a>

- *Type:* str

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}

---

##### `put_version` <a name="put_version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion"></a>

```python
def put_version(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]

---

##### `reset_all_instances_config` <a name="reset_all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig"></a>

```python
def reset_all_instances_config() -> None
```

##### `reset_auto_healing_policies` <a name="reset_auto_healing_policies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies"></a>

```python
def reset_auto_healing_policies() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_lifecycle_policy` <a name="reset_instance_lifecycle_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```python
def reset_instance_lifecycle_policy() -> None
```

##### `reset_list_managed_instances_results` <a name="reset_list_managed_instances_results" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults"></a>

```python
def reset_list_managed_instances_results() -> None
```

##### `reset_named_port` <a name="reset_named_port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort"></a>

```python
def reset_named_port() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_standby_policy` <a name="reset_standby_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy"></a>

```python
def reset_standby_policy() -> None
```

##### `reset_stateful_disk` <a name="reset_stateful_disk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk"></a>

```python
def reset_stateful_disk() -> None
```

##### `reset_stateful_external_ip` <a name="reset_stateful_external_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp"></a>

```python
def reset_stateful_external_ip() -> None
```

##### `reset_stateful_internal_ip` <a name="reset_stateful_internal_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp"></a>

```python
def reset_stateful_internal_ip() -> None
```

##### `reset_target_pools` <a name="reset_target_pools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools"></a>

```python
def reset_target_pools() -> None
```

##### `reset_target_size` <a name="reset_target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize"></a>

```python
def reset_target_size() -> None
```

##### `reset_target_stopped_size` <a name="reset_target_stopped_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize"></a>

```python
def reset_target_stopped_size() -> None
```

##### `reset_target_suspended_size` <a name="reset_target_suspended_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize"></a>

```python
def reset_target_suspended_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

##### `reset_wait_for_instances` <a name="reset_wait_for_instances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances"></a>

```python
def reset_wait_for_instances() -> None
```

##### `reset_wait_for_instances_status` <a name="reset_wait_for_instances_status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus"></a>

```python
def reset_wait_for_instances_status() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInstanceGroupManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies">auto_healing_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup">instance_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId">instance_group_manager_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">instance_lifecycle_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort">named_port</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy">standby_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk">stateful_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp">stateful_external_ip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp">stateful_internal_ip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput">all_instances_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput">auto_healing_policies_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput">base_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput">instance_lifecycle_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput">list_managed_instances_results_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput">named_port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput">params_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput">standby_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput">stateful_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput">stateful_external_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput">stateful_internal_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput">target_pools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput">target_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput">target_stopped_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput">target_suspended_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput">version_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput">wait_for_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput">wait_for_instances_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName">base_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults">list_managed_instances_results</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools">target_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize">target_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize">target_stopped_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize">target_suspended_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances">wait_for_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus">wait_for_instances_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```python
all_instances_config: GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `auto_healing_policies`<sup>Required</sup> <a name="auto_healing_policies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```python
auto_healing_policies: GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```python
instance_group: str
```

- *Type:* str

---

##### `instance_group_manager_id`<sup>Required</sup> <a name="instance_group_manager_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```python
instance_group_manager_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_lifecycle_policy`<sup>Required</sup> <a name="instance_lifecycle_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```python
instance_lifecycle_policy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `named_port`<sup>Required</sup> <a name="named_port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort"></a>

```python
named_port: GoogleComputeInstanceGroupManagerNamedPortList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params"></a>

```python
params: GoogleComputeInstanceGroupManagerParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `standby_policy`<sup>Required</sup> <a name="standby_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```python
standby_policy: GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a>

---

##### `stateful_disk`<sup>Required</sup> <a name="stateful_disk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```python
stateful_disk: GoogleComputeInstanceGroupManagerStatefulDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `stateful_external_ip`<sup>Required</sup> <a name="stateful_external_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```python
stateful_external_ip: GoogleComputeInstanceGroupManagerStatefulExternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `stateful_internal_ip`<sup>Required</sup> <a name="stateful_internal_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```python
stateful_internal_ip: GoogleComputeInstanceGroupManagerStatefulInternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status"></a>

```python
status: GoogleComputeInstanceGroupManagerStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceGroupManagerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```python
update_policy: GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version"></a>

```python
version: GoogleComputeInstanceGroupManagerVersionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a>

---

##### `all_instances_config_input`<sup>Optional</sup> <a name="all_instances_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput"></a>

```python
all_instances_config_input: GoogleComputeInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `auto_healing_policies_input`<sup>Optional</sup> <a name="auto_healing_policies_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```python
auto_healing_policies_input: GoogleComputeInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `base_instance_name_input`<sup>Optional</sup> <a name="base_instance_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput"></a>

```python
base_instance_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_lifecycle_policy_input`<sup>Optional</sup> <a name="instance_lifecycle_policy_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```python
instance_lifecycle_policy_input: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `list_managed_instances_results_input`<sup>Optional</sup> <a name="list_managed_instances_results_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```python
list_managed_instances_results_input: str
```

- *Type:* str

---

##### `named_port_input`<sup>Optional</sup> <a name="named_port_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput"></a>

```python
named_port_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput"></a>

```python
params_input: GoogleComputeInstanceGroupManagerParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `standby_policy_input`<sup>Optional</sup> <a name="standby_policy_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput"></a>

```python
standby_policy_input: GoogleComputeInstanceGroupManagerStandbyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `stateful_disk_input`<sup>Optional</sup> <a name="stateful_disk_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput"></a>

```python
stateful_disk_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]

---

##### `stateful_external_ip_input`<sup>Optional</sup> <a name="stateful_external_ip_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput"></a>

```python
stateful_external_ip_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]

---

##### `stateful_internal_ip_input`<sup>Optional</sup> <a name="stateful_internal_ip_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput"></a>

```python
stateful_internal_ip_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]

---

##### `target_pools_input`<sup>Optional</sup> <a name="target_pools_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput"></a>

```python
target_pools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_size_input`<sup>Optional</sup> <a name="target_size_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput"></a>

```python
target_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_stopped_size_input`<sup>Optional</sup> <a name="target_stopped_size_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput"></a>

```python
target_stopped_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_suspended_size_input`<sup>Optional</sup> <a name="target_suspended_size_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput"></a>

```python
target_suspended_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput"></a>

```python
update_policy_input: GoogleComputeInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput"></a>

```python
version_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]

---

##### `wait_for_instances_input`<sup>Optional</sup> <a name="wait_for_instances_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput"></a>

```python
wait_for_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_instances_status_input`<sup>Optional</sup> <a name="wait_for_instances_status_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```python
wait_for_instances_status_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `base_instance_name`<sup>Required</sup> <a name="base_instance_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```python
base_instance_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `list_managed_instances_results`<sup>Required</sup> <a name="list_managed_instances_results" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```python
list_managed_instances_results: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target_pools`<sup>Required</sup> <a name="target_pools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools"></a>

```python
target_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize"></a>

```python
target_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_stopped_size`<sup>Required</sup> <a name="target_stopped_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```python
target_stopped_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_suspended_size`<sup>Required</sup> <a name="target_suspended_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```python
target_suspended_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_instances`<sup>Required</sup> <a name="wait_for_instances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```python
wait_for_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_instances_status`<sup>Required</sup> <a name="wait_for_instances_status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```python
wait_for_instances_status: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig(
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}

---

### GoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies(
  health_check: str,
  initial_delay_sec: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck">health_check</a></code> | <code>str</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeInstanceGroupManagerConfig <a name="GoogleComputeInstanceGroupManagerConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_instance_name: str,
  name: str,
  version: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]],
  all_instances_config: GoogleComputeInstanceGroupManagerAllInstancesConfig = None,
  auto_healing_policies: GoogleComputeInstanceGroupManagerAutoHealingPolicies = None,
  description: str = None,
  id: str = None,
  instance_lifecycle_policy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy = None,
  list_managed_instances_results: str = None,
  named_port: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]] = None,
  params: GoogleComputeInstanceGroupManagerParams = None,
  project: str = None,
  standby_policy: GoogleComputeInstanceGroupManagerStandbyPolicy = None,
  stateful_disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]] = None,
  stateful_external_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]] = None,
  stateful_internal_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]] = None,
  target_pools: typing.List[str] = None,
  target_size: typing.Union[int, float] = None,
  target_stopped_size: typing.Union[int, float] = None,
  target_suspended_size: typing.Union[int, float] = None,
  timeouts: GoogleComputeInstanceGroupManagerTimeouts = None,
  update_policy: GoogleComputeInstanceGroupManagerUpdatePolicy = None,
  wait_for_instances: typing.Union[bool, IResolvable] = None,
  wait_for_instances_status: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName">base_instance_name</a></code> | <code>str</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version">version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies">auto_healing_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description">description</a></code> | <code>str</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy">instance_lifecycle_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults">list_managed_instances_results</a></code> | <code>str</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort">named_port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy">standby_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk">stateful_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp">stateful_external_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp">stateful_internal_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools">target_pools</a></code> | <code>typing.List[str]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize">target_size</a></code> | <code>typing.Union[int, float]</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize">target_stopped_size</a></code> | <code>typing.Union[int, float]</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize">target_suspended_size</a></code> | <code>typing.Union[int, float]</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances">wait_for_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus">wait_for_instances_status</a></code> | <code>str</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone">zone</a></code> | <code>str</code> | The zone that instances in this group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_instance_name`<sup>Required</sup> <a name="base_instance_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName"></a>

```python
base_instance_name: str
```

- *Type:* str

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version"></a>

```python
version: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `all_instances_config`<sup>Optional</sup> <a name="all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```python
all_instances_config: GoogleComputeInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `auto_healing_policies`<sup>Optional</sup> <a name="auto_healing_policies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```python
auto_healing_policies: GoogleComputeInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_lifecycle_policy`<sup>Optional</sup> <a name="instance_lifecycle_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```python
instance_lifecycle_policy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `list_managed_instances_results`<sup>Optional</sup> <a name="list_managed_instances_results" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```python
list_managed_instances_results: str
```

- *Type:* str

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `named_port`<sup>Optional</sup> <a name="named_port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort"></a>

```python
named_port: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params"></a>

```python
params: GoogleComputeInstanceGroupManagerParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `standby_policy`<sup>Optional</sup> <a name="standby_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy"></a>

```python
standby_policy: GoogleComputeInstanceGroupManagerStandbyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `stateful_disk`<sup>Optional</sup> <a name="stateful_disk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk"></a>

```python
stateful_disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `stateful_external_ip`<sup>Optional</sup> <a name="stateful_external_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```python
stateful_external_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `stateful_internal_ip`<sup>Optional</sup> <a name="stateful_internal_ip" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```python
stateful_internal_ip: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `target_pools`<sup>Optional</sup> <a name="target_pools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools"></a>

```python
target_pools: typing.List[str]
```

- *Type:* typing.List[str]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `target_size`<sup>Optional</sup> <a name="target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize"></a>

```python
target_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `target_stopped_size`<sup>Optional</sup> <a name="target_stopped_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize"></a>

```python
target_stopped_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `target_suspended_size`<sup>Optional</sup> <a name="target_suspended_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize"></a>

```python
target_suspended_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceGroupManagerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy"></a>

```python
update_policy: GoogleComputeInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `wait_for_instances`<sup>Optional</sup> <a name="wait_for_instances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances"></a>

```python
wait_for_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `wait_for_instances_status`<sup>Optional</sup> <a name="wait_for_instances_status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```python
wait_for_instances_status: str
```

- *Type:* str

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy(
  default_action_on_failure: str = None,
  force_update_on_repair: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">default_action_on_failure</a></code> | <code>str</code> | Default behavior for all instance or health check failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">force_update_on_repair</a></code> | <code>str</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |

---

##### `default_action_on_failure`<sup>Optional</sup> <a name="default_action_on_failure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```python
default_action_on_failure: str
```

- *Type:* str

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#default_action_on_failure GoogleComputeInstanceGroupManager#default_action_on_failure}

---

##### `force_update_on_repair`<sup>Optional</sup> <a name="force_update_on_repair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```python
force_update_on_repair: str
```

- *Type:* str

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#force_update_on_repair GoogleComputeInstanceGroupManager#force_update_on_repair}

---

### GoogleComputeInstanceGroupManagerNamedPort <a name="GoogleComputeInstanceGroupManagerNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort(
  name: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name">name</a></code> | <code>str</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#port GoogleComputeInstanceGroupManager#port}

---

### GoogleComputeInstanceGroupManagerParams <a name="GoogleComputeInstanceGroupManagerParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams(
  resource_manager_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to bind to the managed instance group. |

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#resource_manager_tags GoogleComputeInstanceGroupManager#resource_manager_tags}

---

### GoogleComputeInstanceGroupManagerStandbyPolicy <a name="GoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy(
  initial_delay_sec: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode">mode</a></code> | <code>str</code> | Defines how a MIG resumes or starts VMs from a standby pool when the group scales out. |

---

##### `initial_delay_sec`<sup>Optional</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

### GoogleComputeInstanceGroupManagerStatefulDisk <a name="GoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk(
  device_name: str,
  delete_rule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName">device_name</a></code> | <code>str</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule">delete_rule</a></code> | <code>str</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#device_name GoogleComputeInstanceGroupManager#device_name}

---

##### `delete_rule`<sup>Optional</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

### GoogleComputeInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp(
  delete_rule: str = None,
  interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule">delete_rule</a></code> | <code>str</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName">interface_name</a></code> | <code>str</code> | The network interface name. |

---

##### `delete_rule`<sup>Optional</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interface_name`<sup>Optional</sup> <a name="interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp(
  delete_rule: str = None,
  interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule">delete_rule</a></code> | <code>str</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName">interface_name</a></code> | <code>str</code> | The network interface name. |

---

##### `delete_rule`<sup>Optional</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interface_name`<sup>Optional</sup> <a name="interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatus <a name="GoogleComputeInstanceGroupManagerStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus()
```


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig()
```


### GoogleComputeInstanceGroupManagerStatusStateful <a name="GoogleComputeInstanceGroupManagerStatusStateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful()
```


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs()
```


### GoogleComputeInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget()
```


### GoogleComputeInstanceGroupManagerTimeouts <a name="GoogleComputeInstanceGroupManagerTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}.

---

### GoogleComputeInstanceGroupManagerUpdatePolicy <a name="GoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy(
  minimal_action: str,
  type: str,
  max_surge_fixed: typing.Union[int, float] = None,
  max_surge_percent: typing.Union[int, float] = None,
  max_unavailable_fixed: typing.Union[int, float] = None,
  max_unavailable_percent: typing.Union[int, float] = None,
  min_ready_sec: typing.Union[int, float] = None,
  most_disruptive_allowed_action: str = None,
  replacement_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction">minimal_action</a></code> | <code>str</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type">type</a></code> | <code>str</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">max_surge_fixed</a></code> | <code>typing.Union[int, float]</code> | Specifies a fixed number of VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">max_surge_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">max_unavailable_fixed</a></code> | <code>typing.Union[int, float]</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">max_unavailable_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec">min_ready_sec</a></code> | <code>typing.Union[int, float]</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod">replacement_method</a></code> | <code>str</code> | The instance replacement method for managed instance groups. |

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type"></a>

```python
type: str
```

- *Type:* str

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}

---

##### `max_surge_fixed`<sup>Optional</sup> <a name="max_surge_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```python
max_surge_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}

---

##### `max_surge_percent`<sup>Optional</sup> <a name="max_surge_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```python
max_surge_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}

---

##### `max_unavailable_fixed`<sup>Optional</sup> <a name="max_unavailable_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```python
max_unavailable_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}

---

##### `max_unavailable_percent`<sup>Optional</sup> <a name="max_unavailable_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```python
max_unavailable_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}

---

##### `min_ready_sec`<sup>Optional</sup> <a name="min_ready_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```python
min_ready_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}

---

##### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}

---

##### `replacement_method`<sup>Optional</sup> <a name="replacement_method" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```python
replacement_method: str
```

- *Type:* str

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}

---

### GoogleComputeInstanceGroupManagerVersion <a name="GoogleComputeInstanceGroupManagerVersion" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion(
  instance_template: str,
  name: str = None,
  target_size: GoogleComputeInstanceGroupManagerVersionTargetSize = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate">instance_template</a></code> | <code>str</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name">name</a></code> | <code>str</code> | Version name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize">target_size</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `instance_template`<sup>Required</sup> <a name="instance_template" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate"></a>

```python
instance_template: str
```

- *Type:* str

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#instance_template GoogleComputeInstanceGroupManager#instance_template}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name"></a>

```python
name: str
```

- *Type:* str

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `target_size`<sup>Optional</sup> <a name="target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize"></a>

```python
target_size: GoogleComputeInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

### GoogleComputeInstanceGroupManagerVersionTargetSize <a name="GoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize(
  fixed: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">initial_delay_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```python
health_check_input: str
```

- *Type:* str

---

##### `initial_delay_sec_input`<sup>Optional</sup> <a name="initial_delay_sec_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```python
initial_delay_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">reset_default_action_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">reset_force_update_on_repair</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_action_on_failure` <a name="reset_default_action_on_failure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```python
def reset_default_action_on_failure() -> None
```

##### `reset_force_update_on_repair` <a name="reset_force_update_on_repair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```python
def reset_force_update_on_repair() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">default_action_on_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">force_update_on_repair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">default_action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">force_update_on_repair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_action_on_failure_input`<sup>Optional</sup> <a name="default_action_on_failure_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```python
default_action_on_failure_input: str
```

- *Type:* str

---

##### `force_update_on_repair_input`<sup>Optional</sup> <a name="force_update_on_repair_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```python
force_update_on_repair_input: str
```

- *Type:* str

---

##### `default_action_on_failure`<sup>Required</sup> <a name="default_action_on_failure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```python
default_action_on_failure: str
```

- *Type:* str

---

##### `force_update_on_repair`<sup>Required</sup> <a name="force_update_on_repair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```python
force_update_on_repair: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### GoogleComputeInstanceGroupManagerNamedPortList <a name="GoogleComputeInstanceGroupManagerNamedPortList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerNamedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]]

---


### GoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerNamedPort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>]

---


### GoogleComputeInstanceGroupManagerParamsOutputReference <a name="GoogleComputeInstanceGroupManagerParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---


### GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec">reset_initial_delay_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_initial_delay_sec` <a name="reset_initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec"></a>

```python
def reset_initial_delay_sec() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput">initial_delay_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_delay_sec_input`<sup>Optional</sup> <a name="initial_delay_sec_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput"></a>

```python
initial_delay_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStandbyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### GoogleComputeInstanceGroupManagerStatefulDiskList <a name="GoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]]

---


### GoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">reset_delete_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_rule` <a name="reset_delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```python
def reset_delete_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">delete_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule_input`<sup>Optional</sup> <a name="delete_rule_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```python
delete_rule_input: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerStatefulDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>]

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]]

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">reset_delete_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">reset_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_rule` <a name="reset_delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```python
def reset_delete_rule() -> None
```

##### `reset_interface_name` <a name="reset_interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```python
def reset_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">delete_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule_input`<sup>Optional</sup> <a name="delete_rule_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```python
delete_rule_input: str
```

- *Type:* str

---

##### `interface_name_input`<sup>Optional</sup> <a name="interface_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```python
interface_name_input: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerStatefulExternalIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>]

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerStatefulInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]]

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">reset_delete_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">reset_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_rule` <a name="reset_delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```python
def reset_delete_rule() -> None
```

##### `reset_interface_name` <a name="reset_interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```python
def reset_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">delete_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule_input`<sup>Optional</sup> <a name="delete_rule_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```python
delete_rule_input: str
```

- *Type:* str

---

##### `interface_name_input`<sup>Optional</sup> <a name="interface_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```python
interface_name_input: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerStatefulInternalIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>]

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">current_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_revision`<sup>Required</sup> <a name="current_revision" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```python
current_revision: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```python
effective: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStatusAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerStatusList <a name="GoogleComputeInstanceGroupManagerStatusList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInstanceGroupManagerStatusOutputReference <a name="GoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">is_stable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">version_target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```python
all_instances_config: GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `is_stable`<sup>Required</sup> <a name="is_stable" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```python
is_stable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```python
stateful: GoogleComputeInstanceGroupManagerStatusStatefulList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `version_target`<sup>Required</sup> <a name="version_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```python
version_target: GoogleComputeInstanceGroupManagerStatusVersionTargetList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulList <a name="GoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">has_stateful_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">per_instance_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `has_stateful_config`<sup>Required</sup> <a name="has_stateful_config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```python
has_stateful_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `per_instance_configs`<sup>Required</sup> <a name="per_instance_configs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```python
per_instance_configs: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStatusStateful
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">all_effective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_effective`<sup>Required</sup> <a name="all_effective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```python
all_effective: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">is_reached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_reached`<sup>Required</sup> <a name="is_reached" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```python
is_reached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerStatusVersionTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>]

---


### GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">reset_max_surge_fixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">reset_max_surge_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">reset_max_unavailable_fixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">reset_max_unavailable_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">reset_min_ready_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">reset_most_disruptive_allowed_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">reset_replacement_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_surge_fixed` <a name="reset_max_surge_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```python
def reset_max_surge_fixed() -> None
```

##### `reset_max_surge_percent` <a name="reset_max_surge_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```python
def reset_max_surge_percent() -> None
```

##### `reset_max_unavailable_fixed` <a name="reset_max_unavailable_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```python
def reset_max_unavailable_fixed() -> None
```

##### `reset_max_unavailable_percent` <a name="reset_max_unavailable_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```python
def reset_max_unavailable_percent() -> None
```

##### `reset_min_ready_sec` <a name="reset_min_ready_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```python
def reset_min_ready_sec() -> None
```

##### `reset_most_disruptive_allowed_action` <a name="reset_most_disruptive_allowed_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```python
def reset_most_disruptive_allowed_action() -> None
```

##### `reset_replacement_method` <a name="reset_replacement_method" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```python
def reset_replacement_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">max_surge_fixed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">max_surge_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">max_unavailable_fixed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">max_unavailable_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">minimal_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">min_ready_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">most_disruptive_allowed_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">replacement_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">max_surge_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">max_surge_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">max_unavailable_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">max_unavailable_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimal_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">min_ready_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacement_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_surge_fixed_input`<sup>Optional</sup> <a name="max_surge_fixed_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```python
max_surge_fixed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge_percent_input`<sup>Optional</sup> <a name="max_surge_percent_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```python
max_surge_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_fixed_input`<sup>Optional</sup> <a name="max_unavailable_fixed_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```python
max_unavailable_fixed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percent_input`<sup>Optional</sup> <a name="max_unavailable_percent_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```python
max_unavailable_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_action_input`<sup>Optional</sup> <a name="minimal_action_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```python
minimal_action_input: str
```

- *Type:* str

---

##### `min_ready_sec_input`<sup>Optional</sup> <a name="min_ready_sec_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```python
min_ready_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `most_disruptive_allowed_action_input`<sup>Optional</sup> <a name="most_disruptive_allowed_action_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```python
most_disruptive_allowed_action_input: str
```

- *Type:* str

---

##### `replacement_method_input`<sup>Optional</sup> <a name="replacement_method_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```python
replacement_method_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `max_surge_fixed`<sup>Required</sup> <a name="max_surge_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```python
max_surge_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge_percent`<sup>Required</sup> <a name="max_surge_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```python
max_surge_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_fixed`<sup>Required</sup> <a name="max_unavailable_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```python
max_unavailable_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percent`<sup>Required</sup> <a name="max_unavailable_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```python
max_unavailable_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

---

##### `min_ready_sec`<sup>Required</sup> <a name="min_ready_sec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```python
min_ready_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `most_disruptive_allowed_action`<sup>Required</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

---

##### `replacement_method`<sup>Required</sup> <a name="replacement_method" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```python
replacement_method: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeInstanceGroupManagerVersionList <a name="GoogleComputeInstanceGroupManagerVersionList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceGroupManagerVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]]

---


### GoogleComputeInstanceGroupManagerVersionOutputReference <a name="GoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize">put_target_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize">reset_target_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_size` <a name="put_target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```python
def put_target_size(
  fixed: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
) -> None
```

###### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.fixed"></a>

- *Type:* typing.Union[int, float]

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}

---

###### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.percent"></a>

- *Type:* typing.Union[int, float]

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_size` <a name="reset_target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```python
def reset_target_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">target_size</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">instance_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput">target_size_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instance_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```python
target_size: GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `instance_template_input`<sup>Optional</sup> <a name="instance_template_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```python
instance_template_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_size_input`<sup>Optional</sup> <a name="target_size_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```python
target_size_input: GoogleComputeInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `instance_template`<sup>Required</sup> <a name="instance_template" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```python
instance_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupManagerVersion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>]

---


### GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_manager

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">reset_fixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">reset_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed` <a name="reset_fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```python
def reset_fixed() -> None
```

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">fixed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_input`<sup>Optional</sup> <a name="fixed_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```python
fixed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



