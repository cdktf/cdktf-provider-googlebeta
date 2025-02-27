# `googleComputeInstanceTemplate` Submodule <a name="`googleComputeInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceTemplate <a name="GoogleComputeInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]],
  machine_type: str,
  advanced_machine_features: GoogleComputeInstanceTemplateAdvancedMachineFeatures = None,
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  confidential_instance_config: GoogleComputeInstanceTemplateConfidentialInstanceConfig = None,
  description: str = None,
  enable_display: typing.Union[bool, IResolvable] = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]] = None,
  id: str = None,
  instance_description: str = None,
  key_revocation_action_type: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  metadata_startup_script: str = None,
  min_cpu_platform: str = None,
  name: str = None,
  name_prefix: str = None,
  network_interface: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]] = None,
  network_performance_config: GoogleComputeInstanceTemplateNetworkPerformanceConfig = None,
  partner_metadata: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  reservation_affinity: GoogleComputeInstanceTemplateReservationAffinity = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  scheduling: GoogleComputeInstanceTemplateScheduling = None,
  service_account: GoogleComputeInstanceTemplateServiceAccount = None,
  shielded_instance_config: GoogleComputeInstanceTemplateShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: GoogleComputeInstanceTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.enableDisplay">enable_display</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.instanceDescription">instance_description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.partnerMetadata">partner_metadata</a></code> | <code>typing.Mapping[str]</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk GoogleComputeInstanceTemplate#disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.machineType"></a>

- *Type:* str

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#machine_type GoogleComputeInstanceTemplate#machine_type}

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#advanced_machine_features GoogleComputeInstanceTemplate#advanced_machine_features}

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.canIpForward"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#can_ip_forward GoogleComputeInstanceTemplate#can_ip_forward}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#confidential_instance_config GoogleComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.description"></a>

- *Type:* str

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#description GoogleComputeInstanceTemplate#description}

---

##### `enable_display`<sup>Optional</sup> <a name="enable_display" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.enableDisplay"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_display GoogleComputeInstanceTemplate#enable_display}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.guestAccelerator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#guest_accelerator GoogleComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_description`<sup>Optional</sup> <a name="instance_description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.instanceDescription"></a>

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#instance_description GoogleComputeInstanceTemplate#instance_description}

---

##### `key_revocation_action_type`<sup>Optional</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.keyRevocationActionType"></a>

- *Type:* str

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key_revocation_action_type GoogleComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#metadata GoogleComputeInstanceTemplate#metadata}

---

##### `metadata_startup_script`<sup>Optional</sup> <a name="metadata_startup_script" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.metadataStartupScript"></a>

- *Type:* str

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#metadata_startup_script GoogleComputeInstanceTemplate#metadata_startup_script}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.minCpuPlatform"></a>

- *Type:* str

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#min_cpu_platform GoogleComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#name GoogleComputeInstanceTemplate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.namePrefix"></a>

- *Type:* str

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#name_prefix GoogleComputeInstanceTemplate#name_prefix}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_interface GoogleComputeInstanceTemplate#network_interface}

---

##### `network_performance_config`<sup>Optional</sup> <a name="network_performance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.networkPerformanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_performance_config GoogleComputeInstanceTemplate#network_performance_config}

---

##### `partner_metadata`<sup>Optional</sup> <a name="partner_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.partnerMetadata"></a>

- *Type:* typing.Mapping[str]

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#partner_metadata GoogleComputeInstanceTemplate#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#project GoogleComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* str

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#region GoogleComputeInstanceTemplate#region}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#reservation_affinity GoogleComputeInstanceTemplate#reservation_affinity}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.resourcePolicies"></a>

- *Type:* typing.List[str]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#scheduling GoogleComputeInstanceTemplate#scheduling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#service_account GoogleComputeInstanceTemplate#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#shielded_instance_config GoogleComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#tags GoogleComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#timeouts GoogleComputeInstanceTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures">put_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig">put_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator">put_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig">put_network_performance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount">put_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures">reset_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward">reset_can_ip_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig">reset_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay">reset_enable_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator">reset_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription">reset_instance_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType">reset_key_revocation_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript">reset_metadata_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform">reset_min_cpu_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig">reset_network_performance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata">reset_partner_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies">reset_resource_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_machine_features` <a name="put_advanced_machine_features" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures"></a>

```python
def put_advanced_machine_features(
  enable_nested_virtualization: typing.Union[bool, IResolvable] = None,
  enable_uefi_networking: typing.Union[bool, IResolvable] = None,
  performance_monitoring_unit: str = None,
  threads_per_core: typing.Union[int, float] = None,
  turbo_mode: str = None,
  visible_core_count: typing.Union[int, float] = None
) -> None
```

###### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.enableNestedVirtualization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_nested_virtualization GoogleComputeInstanceTemplate#enable_nested_virtualization}

---

###### `enable_uefi_networking`<sup>Optional</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.enableUefiNetworking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_uefi_networking GoogleComputeInstanceTemplate#enable_uefi_networking}

---

###### `performance_monitoring_unit`<sup>Optional</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.performanceMonitoringUnit"></a>

- *Type:* str

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#performance_monitoring_unit GoogleComputeInstanceTemplate#performance_monitoring_unit}

---

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#threads_per_core GoogleComputeInstanceTemplate#threads_per_core}

---

###### `turbo_mode`<sup>Optional</sup> <a name="turbo_mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.turboMode"></a>

- *Type:* str

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#turbo_mode GoogleComputeInstanceTemplate#turbo_mode}

---

###### `visible_core_count`<sup>Optional</sup> <a name="visible_core_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.visibleCoreCount"></a>

- *Type:* typing.Union[int, float]

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#visible_core_count GoogleComputeInstanceTemplate#visible_core_count}

---

##### `put_confidential_instance_config` <a name="put_confidential_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig"></a>

```python
def put_confidential_instance_config(
  confidential_instance_type: str = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
) -> None
```

###### `confidential_instance_type`<sup>Optional</sup> <a name="confidential_instance_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.confidentialInstanceType"></a>

- *Type:* str

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#confidential_instance_type GoogleComputeInstanceTemplate#confidential_instance_type}

---

###### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.enableConfidentialCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_confidential_compute GoogleComputeInstanceTemplate#enable_confidential_compute}

---

##### `put_disk` <a name="put_disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]

---

##### `put_guest_accelerator` <a name="put_guest_accelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator"></a>

```python
def put_guest_accelerator(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]

---

##### `put_network_performance_config` <a name="put_network_performance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig"></a>

```python
def put_network_performance_config(
  total_egress_bandwidth_tier: str
) -> None
```

###### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig.parameter.totalEgressBandwidthTier"></a>

- *Type:* str

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#total_egress_bandwidth_tier GoogleComputeInstanceTemplate#total_egress_bandwidth_tier}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  type: str,
  specific_reservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity.parameter.type"></a>

- *Type:* str

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

###### `specific_reservation`<sup>Optional</sup> <a name="specific_reservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity.parameter.specificReservation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#specific_reservation GoogleComputeInstanceTemplate#specific_reservation}

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling"></a>

```python
def put_scheduling(
  automatic_restart: typing.Union[bool, IResolvable] = None,
  availability_domain: typing.Union[int, float] = None,
  graceful_shutdown: GoogleComputeInstanceTemplateSchedulingGracefulShutdown = None,
  host_error_timeout_seconds: typing.Union[int, float] = None,
  instance_termination_action: str = None,
  local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]] = None,
  maintenance_interval: str = None,
  max_run_duration: GoogleComputeInstanceTemplateSchedulingMaxRunDuration = None,
  min_node_cpus: typing.Union[int, float] = None,
  node_affinities: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]] = None,
  on_host_maintenance: str = None,
  on_instance_stop_action: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  provisioning_model: str = None
) -> None
```

###### `automatic_restart`<sup>Optional</sup> <a name="automatic_restart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.automaticRestart"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#automatic_restart GoogleComputeInstanceTemplate#automatic_restart}

---

###### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.availabilityDomain"></a>

- *Type:* typing.Union[int, float]

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#availability_domain GoogleComputeInstanceTemplate#availability_domain}

---

###### `graceful_shutdown`<sup>Optional</sup> <a name="graceful_shutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.gracefulShutdown"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a>

graceful_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#graceful_shutdown GoogleComputeInstanceTemplate#graceful_shutdown}

---

###### `host_error_timeout_seconds`<sup>Optional</sup> <a name="host_error_timeout_seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.hostErrorTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#host_error_timeout_seconds GoogleComputeInstanceTemplate#host_error_timeout_seconds}

---

###### `instance_termination_action`<sup>Optional</sup> <a name="instance_termination_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.instanceTerminationAction"></a>

- *Type:* str

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#instance_termination_action GoogleComputeInstanceTemplate#instance_termination_action}

---

###### `local_ssd_recovery_timeout`<sup>Optional</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.localSsdRecoveryTimeout"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#local_ssd_recovery_timeout GoogleComputeInstanceTemplate#local_ssd_recovery_timeout}

---

###### `maintenance_interval`<sup>Optional</sup> <a name="maintenance_interval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.maintenanceInterval"></a>

- *Type:* str

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#maintenance_interval GoogleComputeInstanceTemplate#maintenance_interval}

---

###### `max_run_duration`<sup>Optional</sup> <a name="max_run_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.maxRunDuration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#max_run_duration GoogleComputeInstanceTemplate#max_run_duration}

---

###### `min_node_cpus`<sup>Optional</sup> <a name="min_node_cpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.minNodeCpus"></a>

- *Type:* typing.Union[int, float]

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#min_node_cpus GoogleComputeInstanceTemplate#min_node_cpus}

---

###### `node_affinities`<sup>Optional</sup> <a name="node_affinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.nodeAffinities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#node_affinities GoogleComputeInstanceTemplate#node_affinities}

---

###### `on_host_maintenance`<sup>Optional</sup> <a name="on_host_maintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.onHostMaintenance"></a>

- *Type:* str

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#on_host_maintenance GoogleComputeInstanceTemplate#on_host_maintenance}

---

###### `on_instance_stop_action`<sup>Optional</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.onInstanceStopAction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#on_instance_stop_action GoogleComputeInstanceTemplate#on_instance_stop_action}

---

###### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.preemptible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#preemptible GoogleComputeInstanceTemplate#preemptible}

---

###### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.provisioningModel"></a>

- *Type:* str

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#provisioning_model GoogleComputeInstanceTemplate#provisioning_model}

---

##### `put_service_account` <a name="put_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount"></a>

```python
def put_service_account(
  scopes: typing.List[str],
  email: str = None
) -> None
```

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount.parameter.scopes"></a>

- *Type:* typing.List[str]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#scopes GoogleComputeInstanceTemplate#scopes}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount.parameter.email"></a>

- *Type:* str

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#email GoogleComputeInstanceTemplate#email}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_integrity_monitoring GoogleComputeInstanceTemplate#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_secure_boot GoogleComputeInstanceTemplate#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_vtpm GoogleComputeInstanceTemplate#enable_vtpm}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}.

---

##### `reset_advanced_machine_features` <a name="reset_advanced_machine_features" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures"></a>

```python
def reset_advanced_machine_features() -> None
```

##### `reset_can_ip_forward` <a name="reset_can_ip_forward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward"></a>

```python
def reset_can_ip_forward() -> None
```

##### `reset_confidential_instance_config` <a name="reset_confidential_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig"></a>

```python
def reset_confidential_instance_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_display` <a name="reset_enable_display" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay"></a>

```python
def reset_enable_display() -> None
```

##### `reset_guest_accelerator` <a name="reset_guest_accelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator"></a>

```python
def reset_guest_accelerator() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_description` <a name="reset_instance_description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription"></a>

```python
def reset_instance_description() -> None
```

##### `reset_key_revocation_action_type` <a name="reset_key_revocation_action_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType"></a>

```python
def reset_key_revocation_action_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_startup_script` <a name="reset_metadata_startup_script" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript"></a>

```python
def reset_metadata_startup_script() -> None
```

##### `reset_min_cpu_platform` <a name="reset_min_cpu_platform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform"></a>

```python
def reset_min_cpu_platform() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_network_performance_config` <a name="reset_network_performance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig"></a>

```python
def reset_network_performance_config() -> None
```

##### `reset_partner_metadata` <a name="reset_partner_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata"></a>

```python
def reset_partner_metadata() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```

##### `reset_resource_policies` <a name="reset_resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies"></a>

```python
def reset_resource_policies() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInstanceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint">metadata_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique">self_link_unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint">tags_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput">advanced_machine_features_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput">can_ip_forward_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput">confidential_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput">enable_display_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput">guest_accelerator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput">instance_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput">key_revocation_action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput">metadata_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput">min_cpu_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput">network_performance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput">partner_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput">resource_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput">service_account_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay">enable_display</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription">instance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata">partner_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk"></a>

```python
disk: GoogleComputeInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator"></a>

```python
guest_accelerator: GoogleComputeInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `metadata_fingerprint`<sup>Required</sup> <a name="metadata_fingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint"></a>

```python
metadata_fingerprint: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface"></a>

```python
network_interface: GoogleComputeInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `network_performance_config`<sup>Required</sup> <a name="network_performance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```python
network_performance_config: GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleComputeInstanceTemplateReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling"></a>

```python
scheduling: GoogleComputeInstanceTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_unique`<sup>Required</sup> <a name="self_link_unique" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique"></a>

```python
self_link_unique: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount"></a>

```python
service_account: GoogleComputeInstanceTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tags_fingerprint`<sup>Required</sup> <a name="tags_fingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint"></a>

```python
tags_fingerprint: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a>

---

##### `advanced_machine_features_input`<sup>Optional</sup> <a name="advanced_machine_features_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```python
advanced_machine_features_input: GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `can_ip_forward_input`<sup>Optional</sup> <a name="can_ip_forward_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput"></a>

```python
can_ip_forward_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_instance_config_input`<sup>Optional</sup> <a name="confidential_instance_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```python
confidential_instance_config_input: GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]

---

##### `enable_display_input`<sup>Optional</sup> <a name="enable_display_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput"></a>

```python
enable_display_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guest_accelerator_input`<sup>Optional</sup> <a name="guest_accelerator_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput"></a>

```python
guest_accelerator_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_description_input`<sup>Optional</sup> <a name="instance_description_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput"></a>

```python
instance_description_input: str
```

- *Type:* str

---

##### `key_revocation_action_type_input`<sup>Optional</sup> <a name="key_revocation_action_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```python
key_revocation_action_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_startup_script_input`<sup>Optional</sup> <a name="metadata_startup_script_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput"></a>

```python
metadata_startup_script_input: str
```

- *Type:* str

---

##### `min_cpu_platform_input`<sup>Optional</sup> <a name="min_cpu_platform_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput"></a>

```python
min_cpu_platform_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]

---

##### `network_performance_config_input`<sup>Optional</sup> <a name="network_performance_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput"></a>

```python
network_performance_config_input: GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `partner_metadata_input`<sup>Optional</sup> <a name="partner_metadata_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput"></a>

```python
partner_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies_input`<sup>Optional</sup> <a name="resource_policies_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput"></a>

```python
resource_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput"></a>

```python
scheduling_input: GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput"></a>

```python
service_account_input: GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInstanceTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>]

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_display`<sup>Required</sup> <a name="enable_display" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay"></a>

```python
enable_display: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_description`<sup>Required</sup> <a name="instance_description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

---

##### `key_revocation_action_type`<sup>Required</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_startup_script`<sup>Required</sup> <a name="metadata_startup_script" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `partner_metadata`<sup>Required</sup> <a name="partner_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata"></a>

```python
partner_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeatures <a name="GoogleComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures(
  enable_nested_virtualization: typing.Union[bool, IResolvable] = None,
  enable_uefi_networking: typing.Union[bool, IResolvable] = None,
  performance_monitoring_unit: str = None,
  threads_per_core: typing.Union[int, float] = None,
  turbo_mode: str = None,
  visible_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode">turbo_mode</a></code> | <code>str</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | The number of physical cores to expose to an instance. |

---

##### `enable_nested_virtualization`<sup>Optional</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_nested_virtualization GoogleComputeInstanceTemplate#enable_nested_virtualization}

---

##### `enable_uefi_networking`<sup>Optional</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_uefi_networking GoogleComputeInstanceTemplate#enable_uefi_networking}

---

##### `performance_monitoring_unit`<sup>Optional</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#performance_monitoring_unit GoogleComputeInstanceTemplate#performance_monitoring_unit}

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#threads_per_core GoogleComputeInstanceTemplate#threads_per_core}

---

##### `turbo_mode`<sup>Optional</sup> <a name="turbo_mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#turbo_mode GoogleComputeInstanceTemplate#turbo_mode}

---

##### `visible_core_count`<sup>Optional</sup> <a name="visible_core_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#visible_core_count GoogleComputeInstanceTemplate#visible_core_count}

---

### GoogleComputeInstanceTemplateConfidentialInstanceConfig <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig(
  confidential_instance_type: str = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidential_instance_type`<sup>Optional</sup> <a name="confidential_instance_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#confidential_instance_type GoogleComputeInstanceTemplate#confidential_instance_type}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_confidential_compute GoogleComputeInstanceTemplate#enable_confidential_compute}

---

### GoogleComputeInstanceTemplateConfig <a name="GoogleComputeInstanceTemplateConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]],
  machine_type: str,
  advanced_machine_features: GoogleComputeInstanceTemplateAdvancedMachineFeatures = None,
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  confidential_instance_config: GoogleComputeInstanceTemplateConfidentialInstanceConfig = None,
  description: str = None,
  enable_display: typing.Union[bool, IResolvable] = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]] = None,
  id: str = None,
  instance_description: str = None,
  key_revocation_action_type: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  metadata_startup_script: str = None,
  min_cpu_platform: str = None,
  name: str = None,
  name_prefix: str = None,
  network_interface: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]] = None,
  network_performance_config: GoogleComputeInstanceTemplateNetworkPerformanceConfig = None,
  partner_metadata: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  reservation_affinity: GoogleComputeInstanceTemplateReservationAffinity = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  scheduling: GoogleComputeInstanceTemplateScheduling = None,
  service_account: GoogleComputeInstanceTemplateServiceAccount = None,
  shielded_instance_config: GoogleComputeInstanceTemplateShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  timeouts: GoogleComputeInstanceTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType">machine_type</a></code> | <code>str</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description">description</a></code> | <code>str</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay">enable_display</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription">instance_description</a></code> | <code>str</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata">partner_metadata</a></code> | <code>typing.Mapping[str]</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region">region</a></code> | <code>str</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk GoogleComputeInstanceTemplate#disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#machine_type GoogleComputeInstanceTemplate#machine_type}

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#advanced_machine_features GoogleComputeInstanceTemplate#advanced_machine_features}

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#can_ip_forward GoogleComputeInstanceTemplate#can_ip_forward}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#confidential_instance_config GoogleComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#description GoogleComputeInstanceTemplate#description}

---

##### `enable_display`<sup>Optional</sup> <a name="enable_display" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay"></a>

```python
enable_display: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_display GoogleComputeInstanceTemplate#enable_display}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator"></a>

```python
guest_accelerator: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#guest_accelerator GoogleComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_description`<sup>Optional</sup> <a name="instance_description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#instance_description GoogleComputeInstanceTemplate#instance_description}

---

##### `key_revocation_action_type`<sup>Optional</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key_revocation_action_type GoogleComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#metadata GoogleComputeInstanceTemplate#metadata}

---

##### `metadata_startup_script`<sup>Optional</sup> <a name="metadata_startup_script" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#metadata_startup_script GoogleComputeInstanceTemplate#metadata_startup_script}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#min_cpu_platform GoogleComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#name GoogleComputeInstanceTemplate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#name_prefix GoogleComputeInstanceTemplate#name_prefix}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_interface GoogleComputeInstanceTemplate#network_interface}

---

##### `network_performance_config`<sup>Optional</sup> <a name="network_performance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```python
network_performance_config: GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_performance_config GoogleComputeInstanceTemplate#network_performance_config}

---

##### `partner_metadata`<sup>Optional</sup> <a name="partner_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata"></a>

```python
partner_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#partner_metadata GoogleComputeInstanceTemplate#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#project GoogleComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#region GoogleComputeInstanceTemplate#region}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#reservation_affinity GoogleComputeInstanceTemplate#reservation_affinity}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling"></a>

```python
scheduling: GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#scheduling GoogleComputeInstanceTemplate#scheduling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount"></a>

```python
service_account: GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#service_account GoogleComputeInstanceTemplate#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#shielded_instance_config GoogleComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#tags GoogleComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#timeouts GoogleComputeInstanceTemplate#timeouts}

---

### GoogleComputeInstanceTemplateDisk <a name="GoogleComputeInstanceTemplateDisk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk(
  auto_delete: typing.Union[bool, IResolvable] = None,
  boot: typing.Union[bool, IResolvable] = None,
  device_name: str = None,
  disk_encryption_key: GoogleComputeInstanceTemplateDiskDiskEncryptionKey = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  interface: str = None,
  labels: typing.Mapping[str] = None,
  mode: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  resource_manager_tags: typing.Mapping[str] = None,
  resource_policies: typing.List[str] = None,
  source: str = None,
  source_image: str = None,
  source_image_encryption_key: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey = None,
  source_snapshot: str = None,
  source_snapshot_encryption_key: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName">device_name</a></code> | <code>str</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName">disk_name</a></code> | <code>str</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType">disk_type</a></code> | <code>str</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface">interface</a></code> | <code>str</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode">mode</a></code> | <code>str</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source">source</a></code> | <code>str</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage">source_image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type">type</a></code> | <code>str</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#auto_delete GoogleComputeInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#boot GoogleComputeInstanceTemplate#boot}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#device_name GoogleComputeInstanceTemplate#device_name}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey"></a>

```python
disk_encryption_key: GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk_encryption_key GoogleComputeInstanceTemplate#disk_encryption_key}

---

##### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk_name GoogleComputeInstanceTemplate#disk_name}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk_size_gb GoogleComputeInstanceTemplate#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#disk_type GoogleComputeInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#interface GoogleComputeInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#mode GoogleComputeInstanceTemplate#mode}

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#provisioned_iops GoogleComputeInstanceTemplate#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#provisioned_throughput GoogleComputeInstanceTemplate#provisioned_throughput}

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source"></a>

```python
source: str
```

- *Type:* str

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#source GoogleComputeInstanceTemplate#source}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#source_image GoogleComputeInstanceTemplate#source_image}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#source_image_encryption_key GoogleComputeInstanceTemplate#source_image_encryption_key}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#source_snapshot GoogleComputeInstanceTemplate#source_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#source_snapshot_encryption_key GoogleComputeInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type"></a>

```python
type: str
```

- *Type:* str

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateDiskDiskEncryptionKey <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey(
  kms_key_self_link: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey(
  kms_key_self_link: str,
  kms_key_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey(
  kms_key_self_link: str,
  kms_key_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateGuestAccelerator <a name="GoogleComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>str</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#count GoogleComputeInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type"></a>

```python
type: str
```

- *Type:* str

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateNetworkInterface <a name="GoogleComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface(
  access_config: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]] = None,
  alias_ip_range: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]] = None,
  internal_ipv6_prefix_length: typing.Union[int, float] = None,
  ipv6_access_config: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]] = None,
  ipv6_address: str = None,
  network: str = None,
  network_attachment: str = None,
  network_ip: str = None,
  nic_type: str = None,
  queue_count: typing.Union[int, float] = None,
  stack_type: str = None,
  subnetwork: str = None,
  subnetwork_project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig">access_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange">alias_ip_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>str</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp">network_ip</a></code> | <code>str</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType">stack_type</a></code> | <code>str</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | The ID of the project in which the subnetwork belongs. |

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig"></a>

```python
access_config: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#access_config GoogleComputeInstanceTemplate#access_config}

---

##### `alias_ip_range`<sup>Optional</sup> <a name="alias_ip_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```python
alias_ip_range: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#alias_ip_range GoogleComputeInstanceTemplate#alias_ip_range}

---

##### `internal_ipv6_prefix_length`<sup>Optional</sup> <a name="internal_ipv6_prefix_length" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#internal_ipv6_prefix_length GoogleComputeInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6_access_config`<sup>Optional</sup> <a name="ipv6_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#ipv6_access_config GoogleComputeInstanceTemplate#ipv6_access_config}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#ipv6_address GoogleComputeInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network"></a>

```python
network: str
```

- *Type:* str

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network GoogleComputeInstanceTemplate#network}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_attachment GoogleComputeInstanceTemplate#network_attachment}

---

##### `network_ip`<sup>Optional</sup> <a name="network_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_ip GoogleComputeInstanceTemplate#network_ip}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nic_type GoogleComputeInstanceTemplate#nic_type}

---

##### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#queue_count GoogleComputeInstanceTemplate#queue_count}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#stack_type GoogleComputeInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#subnetwork GoogleComputeInstanceTemplate#subnetwork}

---

##### `subnetwork_project`<sup>Optional</sup> <a name="subnetwork_project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#subnetwork_project GoogleComputeInstanceTemplate#subnetwork_project}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig(
  nat_ip: str = None,
  network_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">nat_ip</a></code> | <code>str</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The networking tier used for configuring this instance template. |

---

##### `nat_ip`<sup>Optional</sup> <a name="nat_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nat_ip GoogleComputeInstanceTemplate#nat_ip}

---

##### `network_tier`<sup>Optional</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange(
  ip_cidr_range: str,
  subnetwork_range_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#ip_cidr_range GoogleComputeInstanceTemplate#ip_cidr_range}

---

##### `subnetwork_range_name`<sup>Optional</sup> <a name="subnetwork_range_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#subnetwork_range_name GoogleComputeInstanceTemplate#subnetwork_range_name}

---

### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig(
  network_tier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkPerformanceConfig <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig(
  total_egress_bandwidth_tier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#total_egress_bandwidth_tier GoogleComputeInstanceTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceTemplateReservationAffinity <a name="GoogleComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity(
  type: str,
  specific_reservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>str</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type"></a>

```python
type: str
```

- *Type:* str

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

##### `specific_reservation`<sup>Optional</sup> <a name="specific_reservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation"></a>

```python
specific_reservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#specific_reservation GoogleComputeInstanceTemplate#specific_reservation}

---

### GoogleComputeInstanceTemplateReservationAffinitySpecificReservation <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>str</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```python
key: str
```

- *Type:* str

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}

---

### GoogleComputeInstanceTemplateScheduling <a name="GoogleComputeInstanceTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling(
  automatic_restart: typing.Union[bool, IResolvable] = None,
  availability_domain: typing.Union[int, float] = None,
  graceful_shutdown: GoogleComputeInstanceTemplateSchedulingGracefulShutdown = None,
  host_error_timeout_seconds: typing.Union[int, float] = None,
  instance_termination_action: str = None,
  local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]] = None,
  maintenance_interval: str = None,
  max_run_duration: GoogleComputeInstanceTemplateSchedulingMaxRunDuration = None,
  min_node_cpus: typing.Union[int, float] = None,
  node_affinities: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]] = None,
  on_host_maintenance: str = None,
  on_instance_stop_action: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  provisioning_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart">automatic_restart</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.gracefulShutdown">graceful_shutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a></code> | graceful_shutdown block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds">host_error_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval">maintenance_interval</a></code> | <code>str</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities">node_affinities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `automatic_restart`<sup>Optional</sup> <a name="automatic_restart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart"></a>

```python
automatic_restart: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#automatic_restart GoogleComputeInstanceTemplate#automatic_restart}

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#availability_domain GoogleComputeInstanceTemplate#availability_domain}

---

##### `graceful_shutdown`<sup>Optional</sup> <a name="graceful_shutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.gracefulShutdown"></a>

```python
graceful_shutdown: GoogleComputeInstanceTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a>

graceful_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#graceful_shutdown GoogleComputeInstanceTemplate#graceful_shutdown}

---

##### `host_error_timeout_seconds`<sup>Optional</sup> <a name="host_error_timeout_seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```python
host_error_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#host_error_timeout_seconds GoogleComputeInstanceTemplate#host_error_timeout_seconds}

---

##### `instance_termination_action`<sup>Optional</sup> <a name="instance_termination_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#instance_termination_action GoogleComputeInstanceTemplate#instance_termination_action}

---

##### `local_ssd_recovery_timeout`<sup>Optional</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#local_ssd_recovery_timeout GoogleComputeInstanceTemplate#local_ssd_recovery_timeout}

---

##### `maintenance_interval`<sup>Optional</sup> <a name="maintenance_interval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval"></a>

```python
maintenance_interval: str
```

- *Type:* str

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#maintenance_interval GoogleComputeInstanceTemplate#maintenance_interval}

---

##### `max_run_duration`<sup>Optional</sup> <a name="max_run_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration"></a>

```python
max_run_duration: GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#max_run_duration GoogleComputeInstanceTemplate#max_run_duration}

---

##### `min_node_cpus`<sup>Optional</sup> <a name="min_node_cpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#min_node_cpus GoogleComputeInstanceTemplate#min_node_cpus}

---

##### `node_affinities`<sup>Optional</sup> <a name="node_affinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities"></a>

```python
node_affinities: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#node_affinities GoogleComputeInstanceTemplate#node_affinities}

---

##### `on_host_maintenance`<sup>Optional</sup> <a name="on_host_maintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#on_host_maintenance GoogleComputeInstanceTemplate#on_host_maintenance}

---

##### `on_instance_stop_action`<sup>Optional</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#on_instance_stop_action GoogleComputeInstanceTemplate#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#preemptible GoogleComputeInstanceTemplate#preemptible}

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#provisioning_model GoogleComputeInstanceTemplate#provisioning_model}

---

### GoogleComputeInstanceTemplateSchedulingGracefulShutdown <a name="GoogleComputeInstanceTemplateSchedulingGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown(
  enabled: typing.Union[bool, IResolvable],
  max_duration: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Opts-in for graceful shutdown. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown.property.maxDuration">max_duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | max_duration block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Opts-in for graceful shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enabled GoogleComputeInstanceTemplate#enabled}

---

##### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown.property.maxDuration"></a>

```python
max_duration: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#max_duration GoogleComputeInstanceTemplate#max_duration}

---

### GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration <a name="GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond 													resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second.

The value must be between 1 and 3600, which is 3,600 seconds (one hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond 													resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingMaxRunDuration <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingNodeAffinities <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities(
  key: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}.

---

### GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction(
  discard_local_ssd: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">discard_local_ssd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discard_local_ssd`<sup>Optional</sup> <a name="discard_local_ssd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```python
discard_local_ssd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#discard_local_ssd GoogleComputeInstanceTemplate#discard_local_ssd}

---

### GoogleComputeInstanceTemplateServiceAccount <a name="GoogleComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount(
  scopes: typing.List[str],
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email">email</a></code> | <code>str</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#scopes GoogleComputeInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#email GoogleComputeInstanceTemplate#email}

---

### GoogleComputeInstanceTemplateShieldedInstanceConfig <a name="GoogleComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_integrity_monitoring GoogleComputeInstanceTemplate#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_secure_boot GoogleComputeInstanceTemplate#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enable_vtpm GoogleComputeInstanceTemplate#enable_vtpm}

---

### GoogleComputeInstanceTemplateTimeouts <a name="GoogleComputeInstanceTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">reset_enable_nested_virtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">reset_enable_uefi_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">reset_performance_monitoring_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">reset_turbo_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">reset_visible_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_nested_virtualization` <a name="reset_enable_nested_virtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```python
def reset_enable_nested_virtualization() -> None
```

##### `reset_enable_uefi_networking` <a name="reset_enable_uefi_networking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```python
def reset_enable_uefi_networking() -> None
```

##### `reset_performance_monitoring_unit` <a name="reset_performance_monitoring_unit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```python
def reset_performance_monitoring_unit() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```

##### `reset_turbo_mode` <a name="reset_turbo_mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```python
def reset_turbo_mode() -> None
```

##### `reset_visible_core_count` <a name="reset_visible_core_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```python
def reset_visible_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enable_nested_virtualization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enable_uefi_networking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performance_monitoring_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">turbo_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visible_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turbo_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_nested_virtualization_input`<sup>Optional</sup> <a name="enable_nested_virtualization_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```python
enable_nested_virtualization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_uefi_networking_input`<sup>Optional</sup> <a name="enable_uefi_networking_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```python
enable_uefi_networking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_monitoring_unit_input`<sup>Optional</sup> <a name="performance_monitoring_unit_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```python
performance_monitoring_unit_input: str
```

- *Type:* str

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode_input`<sup>Optional</sup> <a name="turbo_mode_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```python
turbo_mode_input: str
```

- *Type:* str

---

##### `visible_core_count_input`<sup>Optional</sup> <a name="visible_core_count_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```python
visible_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_uefi_networking`<sup>Required</sup> <a name="enable_uefi_networking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_monitoring_unit`<sup>Required</sup> <a name="performance_monitoring_unit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode`<sup>Required</sup> <a name="turbo_mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

---

##### `visible_core_count`<sup>Required</sup> <a name="visible_core_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">reset_confidential_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidential_instance_type` <a name="reset_confidential_instance_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```python
def reset_confidential_instance_type() -> None
```

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidential_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_type_input`<sup>Optional</sup> <a name="confidential_instance_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```python
confidential_instance_type_input: str
```

- *Type:* str

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_instance_type`<sup>Required</sup> <a name="confidential_instance_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskList <a name="GoogleComputeInstanceTemplateDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]]

---


### GoogleComputeInstanceTemplateDiskOutputReference <a name="GoogleComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">put_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot">reset_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName">reset_disk_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops">reset_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies">reset_resource_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage">reset_source_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">reset_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_self_link: str
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `put_source_image_encryption_key` <a name="put_source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```python
def put_source_image_encryption_key(
  kms_key_self_link: str,
  kms_key_service_account: str = None
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  kms_key_self_link: str,
  kms_key_service_account: str = None
) -> None
```

###### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_boot` <a name="reset_boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot"></a>

```python
def reset_boot() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_disk_name` <a name="reset_disk_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName"></a>

```python
def reset_disk_name() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_provisioned_iops` <a name="reset_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```python
def reset_provisioned_iops() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```

##### `reset_resource_policies` <a name="reset_resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```python
def reset_resource_policies() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_image` <a name="reset_source_image" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```python
def reset_source_image() -> None
```

##### `reset_source_image_encryption_key` <a name="reset_source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```python
def reset_source_image_encryption_key() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput">boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisioned_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resource_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">source_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```python
disk_encryption_key: GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot_input`<sup>Optional</sup> <a name="boot_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput"></a>

```python
boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `disk_encryption_key_input`<sup>Optional</sup> <a name="disk_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```python
disk_encryption_key_input: GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `provisioned_iops_input`<sup>Optional</sup> <a name="provisioned_iops_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```python
provisioned_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies_input`<sup>Optional</sup> <a name="resource_policies_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```python
resource_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_image_encryption_key_input`<sup>Optional</sup> <a name="source_image_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```python
source_image_encryption_key_input: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>]

---


### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeInstanceTemplateGuestAcceleratorList <a name="GoogleComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]]

---


### GoogleComputeInstanceTemplateGuestAcceleratorOutputReference <a name="GoogleComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateGuestAccelerator]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">reset_nat_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">reset_network_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nat_ip` <a name="reset_nat_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```python
def reset_nat_ip() -> None
```

##### `reset_network_tier` <a name="reset_network_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```python
def reset_network_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">nat_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">nat_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `nat_ip_input`<sup>Optional</sup> <a name="nat_ip_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```python
nat_ip_input: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `nat_ip`<sup>Required</sup> <a name="nat_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">reset_subnetwork_range_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnetwork_range_name` <a name="reset_subnetwork_range_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```python
def reset_subnetwork_range_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetwork_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `subnetwork_range_name_input`<sup>Optional</sup> <a name="subnetwork_range_name_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```python
subnetwork_range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">external_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">external_ipv6_prefix_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ipv6`<sup>Required</sup> <a name="external_ipv6" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```python
external_ipv6: str
```

- *Type:* str

---

##### `external_ipv6_prefix_length`<sup>Required</sup> <a name="external_ipv6_prefix_length" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```python
external_ipv6_prefix_length: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]

---


### GoogleComputeInstanceTemplateNetworkInterfaceList <a name="GoogleComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]]

---


### GoogleComputeInstanceTemplateNetworkInterfaceOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">put_alias_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">put_ipv6_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">reset_alias_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">reset_internal_ipv6_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">reset_ipv6_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">reset_network_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">reset_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">reset_subnetwork_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```python
def put_access_config(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---

##### `put_alias_ip_range` <a name="put_alias_ip_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```python
def put_alias_ip_range(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---

##### `put_ipv6_access_config` <a name="put_ipv6_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```python
def put_ipv6_access_config(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_alias_ip_range` <a name="reset_alias_ip_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```python
def reset_alias_ip_range() -> None
```

##### `reset_internal_ipv6_prefix_length` <a name="reset_internal_ipv6_prefix_length" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```python
def reset_internal_ipv6_prefix_length() -> None
```

##### `reset_ipv6_access_config` <a name="reset_ipv6_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```python
def reset_ipv6_access_config() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```

##### `reset_network_ip` <a name="reset_network_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```python
def reset_network_ip() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_queue_count` <a name="reset_queue_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```python
def reset_queue_count() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_subnetwork_project` <a name="reset_subnetwork_project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```python
def reset_subnetwork_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">alias_ip_range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">access_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">alias_ip_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internal_ipv6_prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6_access_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">network_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetwork_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">network_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```python
access_config: GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `alias_ip_range`<sup>Required</sup> <a name="alias_ip_range" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```python
alias_ip_range: GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6_access_config`<sup>Required</sup> <a name="ipv6_access_config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```python
access_config_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>]]

---

##### `alias_ip_range_input`<sup>Optional</sup> <a name="alias_ip_range_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```python
alias_ip_range_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>]]

---

##### `internal_ipv6_prefix_length_input`<sup>Optional</sup> <a name="internal_ipv6_prefix_length_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```python
internal_ipv6_prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_access_config_input`<sup>Optional</sup> <a name="ipv6_access_config_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```python
ipv6_access_config_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>]]

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_ip_input`<sup>Optional</sup> <a name="network_ip_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```python
network_ip_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `queue_count_input`<sup>Optional</sup> <a name="queue_count_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```python
queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `subnetwork_project_input`<sup>Optional</sup> <a name="subnetwork_project_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```python
subnetwork_project_input: str
```

- *Type:* str

---

##### `internal_ipv6_prefix_length`<sup>Required</sup> <a name="internal_ipv6_prefix_length" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `network_ip`<sup>Required</sup> <a name="network_ip" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `subnetwork_project`<sup>Required</sup> <a name="subnetwork_project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>]

---


### GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">total_egress_bandwidth_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier_input`<sup>Optional</sup> <a name="total_egress_bandwidth_tier_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```python
total_egress_bandwidth_tier_input: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceTemplateReservationAffinityOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">put_specific_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">reset_specific_reservation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_specific_reservation` <a name="put_specific_reservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```python
def put_specific_reservation(
  key: str,
  values: typing.List[str]
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.key"></a>

- *Type:* str

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}

---

##### `reset_specific_reservation` <a name="reset_specific_reservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```python
def reset_specific_reservation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specific_reservation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specific_reservation`<sup>Required</sup> <a name="specific_reservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```python
specific_reservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specific_reservation_input`<sup>Optional</sup> <a name="specific_reservation_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```python
specific_reservation_input: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---


### GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference <a name="GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---


### GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference <a name="GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration">put_max_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration">reset_max_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_max_duration` <a name="put_max_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration"></a>

```python
def put_max_duration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second.

The value must be between 1 and 3600, which is 3,600 seconds (one hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond 													resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

##### `reset_max_duration` <a name="reset_max_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration"></a>

```python
def reset_max_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration">max_duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput">max_duration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```python
max_duration: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_duration_input`<sup>Optional</sup> <a name="max_duration_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput"></a>

```python
max_duration_input: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a>

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]

---


### GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateSchedulingNodeAffinities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]

---


### GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">reset_discard_local_ssd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_discard_local_ssd` <a name="reset_discard_local_ssd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```python
def reset_discard_local_ssd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discard_local_ssd_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discard_local_ssd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discard_local_ssd_input`<sup>Optional</sup> <a name="discard_local_ssd_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```python
discard_local_ssd_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discard_local_ssd`<sup>Required</sup> <a name="discard_local_ssd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```python
discard_local_ssd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceTemplateSchedulingOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putGracefulShutdown">put_graceful_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">put_local_ssd_recovery_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration">put_max_run_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities">put_node_affinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">put_on_instance_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">reset_automatic_restart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetGracefulShutdown">reset_graceful_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">reset_host_error_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">reset_instance_termination_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">reset_local_ssd_recovery_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval">reset_maintenance_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">reset_max_run_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">reset_min_node_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities">reset_node_affinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">reset_on_host_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">reset_on_instance_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible">reset_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel">reset_provisioning_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_graceful_shutdown` <a name="put_graceful_shutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putGracefulShutdown"></a>

```python
def put_graceful_shutdown(
  enabled: typing.Union[bool, IResolvable],
  max_duration: GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putGracefulShutdown.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Opts-in for graceful shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#enabled GoogleComputeInstanceTemplate#enabled}

---

###### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putGracefulShutdown.parameter.maxDuration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#max_duration GoogleComputeInstanceTemplate#max_duration}

---

##### `put_local_ssd_recovery_timeout` <a name="put_local_ssd_recovery_timeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```python
def put_local_ssd_recovery_timeout(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---

##### `put_max_run_duration` <a name="put_max_run_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```python
def put_max_run_duration(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

##### `put_node_affinities` <a name="put_node_affinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```python
def put_node_affinities(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---

##### `put_on_instance_stop_action` <a name="put_on_instance_stop_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```python
def put_on_instance_stop_action(
  discard_local_ssd: typing.Union[bool, IResolvable] = None
) -> None
```

###### `discard_local_ssd`<sup>Optional</sup> <a name="discard_local_ssd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.discardLocalSsd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_instance_template#discard_local_ssd GoogleComputeInstanceTemplate#discard_local_ssd}

---

##### `reset_automatic_restart` <a name="reset_automatic_restart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```python
def reset_automatic_restart() -> None
```

##### `reset_availability_domain` <a name="reset_availability_domain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_graceful_shutdown` <a name="reset_graceful_shutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetGracefulShutdown"></a>

```python
def reset_graceful_shutdown() -> None
```

##### `reset_host_error_timeout_seconds` <a name="reset_host_error_timeout_seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```python
def reset_host_error_timeout_seconds() -> None
```

##### `reset_instance_termination_action` <a name="reset_instance_termination_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```python
def reset_instance_termination_action() -> None
```

##### `reset_local_ssd_recovery_timeout` <a name="reset_local_ssd_recovery_timeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```python
def reset_local_ssd_recovery_timeout() -> None
```

##### `reset_maintenance_interval` <a name="reset_maintenance_interval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```python
def reset_maintenance_interval() -> None
```

##### `reset_max_run_duration` <a name="reset_max_run_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```python
def reset_max_run_duration() -> None
```

##### `reset_min_node_cpus` <a name="reset_min_node_cpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```python
def reset_min_node_cpus() -> None
```

##### `reset_node_affinities` <a name="reset_node_affinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```python
def reset_node_affinities() -> None
```

##### `reset_on_host_maintenance` <a name="reset_on_host_maintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```python
def reset_on_host_maintenance() -> None
```

##### `reset_on_instance_stop_action` <a name="reset_on_instance_stop_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```python
def reset_on_instance_stop_action() -> None
```

##### `reset_preemptible` <a name="reset_preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```python
def reset_preemptible() -> None
```

##### `reset_provisioning_model` <a name="reset_provisioning_model" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```python
def reset_provisioning_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.gracefulShutdown">graceful_shutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">node_affinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automatic_restart_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput">graceful_shutdown_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">host_error_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instance_termination_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">local_ssd_recovery_timeout_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput">maintenance_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">max_run_duration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">min_node_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">node_affinities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">on_host_maintenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">on_instance_stop_action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioning_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">automatic_restart</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">host_error_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">maintenance_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graceful_shutdown`<sup>Required</sup> <a name="graceful_shutdown" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.gracefulShutdown"></a>

```python
graceful_shutdown: GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeInstanceTemplateSchedulingGracefulShutdownOutputReference</a>

---

##### `local_ssd_recovery_timeout`<sup>Required</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `max_run_duration`<sup>Required</sup> <a name="max_run_duration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```python
max_run_duration: GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `node_affinities`<sup>Required</sup> <a name="node_affinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```python
node_affinities: GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `on_instance_stop_action`<sup>Required</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automatic_restart_input`<sup>Optional</sup> <a name="automatic_restart_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```python
automatic_restart_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graceful_shutdown_input`<sup>Optional</sup> <a name="graceful_shutdown_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput"></a>

```python
graceful_shutdown_input: GoogleComputeInstanceTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingGracefulShutdown">GoogleComputeInstanceTemplateSchedulingGracefulShutdown</a>

---

##### `host_error_timeout_seconds_input`<sup>Optional</sup> <a name="host_error_timeout_seconds_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```python
host_error_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action_input`<sup>Optional</sup> <a name="instance_termination_action_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```python
instance_termination_action_input: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout_input`<sup>Optional</sup> <a name="local_ssd_recovery_timeout_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```python
local_ssd_recovery_timeout_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>]]

---

##### `maintenance_interval_input`<sup>Optional</sup> <a name="maintenance_interval_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```python
maintenance_interval_input: str
```

- *Type:* str

---

##### `max_run_duration_input`<sup>Optional</sup> <a name="max_run_duration_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```python
max_run_duration_input: GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `min_node_cpus_input`<sup>Optional</sup> <a name="min_node_cpus_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```python
min_node_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_affinities_input`<sup>Optional</sup> <a name="node_affinities_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```python
node_affinities_input: typing.Union[IResolvable, typing.List[GoogleComputeInstanceTemplateSchedulingNodeAffinities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>]]

---

##### `on_host_maintenance_input`<sup>Optional</sup> <a name="on_host_maintenance_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```python
on_host_maintenance_input: str
```

- *Type:* str

---

##### `on_instance_stop_action_input`<sup>Optional</sup> <a name="on_instance_stop_action_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```python
on_instance_stop_action_input: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `preemptible_input`<sup>Optional</sup> <a name="preemptible_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```python
preemptible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_model_input`<sup>Optional</sup> <a name="provisioning_model_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```python
provisioning_model_input: str
```

- *Type:* str

---

##### `automatic_restart`<sup>Required</sup> <a name="automatic_restart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```python
automatic_restart: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_error_timeout_seconds`<sup>Required</sup> <a name="host_error_timeout_seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```python
host_error_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action`<sup>Required</sup> <a name="instance_termination_action" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

---

##### `maintenance_interval`<sup>Required</sup> <a name="maintenance_interval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```python
maintenance_interval: str
```

- *Type:* str

---

##### `min_node_cpus`<sup>Required</sup> <a name="min_node_cpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_host_maintenance`<sup>Required</sup> <a name="on_host_maintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---


### GoogleComputeInstanceTemplateServiceAccountOutputReference <a name="GoogleComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---


### GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---


### GoogleComputeInstanceTemplateTimeoutsOutputReference <a name="GoogleComputeInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_template

googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>]

---



