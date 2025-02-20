# `googleComputeRegionCommitment` Submodule <a name="`googleComputeRegionCommitment` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionCommitment <a name="GoogleComputeRegionCommitment" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitment(
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
  plan: str,
  auto_renew: typing.Union[bool, IResolvable] = None,
  category: str = None,
  description: str = None,
  existing_reservations: str = None,
  id: str = None,
  license_resource: GoogleComputeRegionCommitmentLicenseResource = None,
  project: str = None,
  region: str = None,
  resources: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]] = None,
  timeouts: GoogleComputeRegionCommitmentTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.plan">plan</a></code> | <code>str</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.category">category</a></code> | <code>str</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.existingReservations">existing_reservations</a></code> | <code>str</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.plan"></a>

- *Type:* str

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.autoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.category"></a>

- *Type:* str

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `existing_reservations`<sup>Optional</sup> <a name="existing_reservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.existingReservations"></a>

- *Type:* str

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_resource`<sup>Optional</sup> <a name="license_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.licenseResource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.resources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.type"></a>

- *Type:* str

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource">put_license_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations">reset_existing_reservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource">reset_license_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_license_resource` <a name="put_license_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource"></a>

```python
def put_license_resource(
  license: str,
  amount: str = None,
  cores_per_license: str = None
) -> None
```

###### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.license"></a>

- *Type:* str

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#license GoogleComputeRegionCommitment#license}

---

###### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.amount"></a>

- *Type:* str

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

###### `cores_per_license`<sup>Optional</sup> <a name="cores_per_license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.coresPerLicense"></a>

- *Type:* str

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#cores_per_license GoogleComputeRegionCommitment#cores_per_license}

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources"></a>

```python
def put_resources(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}.

---

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_existing_reservations` <a name="reset_existing_reservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations"></a>

```python
def reset_existing_reservations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_resource` <a name="reset_license_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource"></a>

```python
def reset_license_resource() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionCommitment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId">commitment_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp">end_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput">auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput">existing_reservations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput">license_resource_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput">resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations">existing_reservations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commitment_id`<sup>Required</sup> <a name="commitment_id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId"></a>

```python
commitment_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `end_timestamp`<sup>Required</sup> <a name="end_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp"></a>

```python
end_timestamp: str
```

- *Type:* str

---

##### `license_resource`<sup>Required</sup> <a name="license_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource"></a>

```python
license_resource: GoogleComputeRegionCommitmentLicenseResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources"></a>

```python
resources: GoogleComputeRegionCommitmentResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionCommitmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput"></a>

```python
auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `existing_reservations_input`<sup>Optional</sup> <a name="existing_reservations_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput"></a>

```python
existing_reservations_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_resource_input`<sup>Optional</sup> <a name="license_resource_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput"></a>

```python
license_resource_input: GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput"></a>

```python
resources_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `existing_reservations`<sup>Required</sup> <a name="existing_reservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations"></a>

```python
existing_reservations: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionCommitmentConfig <a name="GoogleComputeRegionCommitmentConfig" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plan: str,
  auto_renew: typing.Union[bool, IResolvable] = None,
  category: str = None,
  description: str = None,
  existing_reservations: str = None,
  id: str = None,
  license_resource: GoogleComputeRegionCommitmentLicenseResource = None,
  project: str = None,
  region: str = None,
  resources: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]] = None,
  timeouts: GoogleComputeRegionCommitmentTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>str</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category">category</a></code> | <code>str</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations">existing_reservations</a></code> | <code>str</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region">region</a></code> | <code>str</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type">type</a></code> | <code>str</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category"></a>

```python
category: str
```

- *Type:* str

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `existing_reservations`<sup>Optional</sup> <a name="existing_reservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations"></a>

```python
existing_reservations: str
```

- *Type:* str

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_resource`<sup>Optional</sup> <a name="license_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource"></a>

```python
license_resource: GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources"></a>

```python
resources: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionCommitmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentLicenseResource <a name="GoogleComputeRegionCommitmentLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource(
  license: str,
  amount: str = None,
  cores_per_license: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>str</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>str</code> | The number of licenses purchased. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense">cores_per_license</a></code> | <code>str</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license"></a>

```python
license: str
```

- *Type:* str

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#license GoogleComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount"></a>

```python
amount: str
```

- *Type:* str

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `cores_per_license`<sup>Optional</sup> <a name="cores_per_license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```python
cores_per_license: str
```

- *Type:* str

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#cores_per_license GoogleComputeRegionCommitment#cores_per_license}

---

### GoogleComputeRegionCommitmentResources <a name="GoogleComputeRegionCommitmentResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources(
  accelerator_type: str = None,
  amount: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>str</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type">type</a></code> | <code>str</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#accelerator_type GoogleComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount"></a>

```python
amount: str
```

- *Type:* str

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type"></a>

```python
type: str
```

- *Type:* str

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentTimeouts <a name="GoogleComputeRegionCommitmentTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionCommitmentLicenseResourceOutputReference <a name="GoogleComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">reset_cores_per_license</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amount` <a name="reset_amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_cores_per_license` <a name="reset_cores_per_license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```python
def reset_cores_per_license() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">cores_per_license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">cores_per_license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```python
amount_input: str
```

- *Type:* str

---

##### `cores_per_license_input`<sup>Optional</sup> <a name="cores_per_license_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```python
cores_per_license_input: str
```

- *Type:* str

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `cores_per_license`<sup>Required</sup> <a name="cores_per_license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```python
cores_per_license: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---


### GoogleComputeRegionCommitmentResourcesList <a name="GoogleComputeRegionCommitmentResourcesList" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionCommitmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]]

---


### GoogleComputeRegionCommitmentResourcesOutputReference <a name="GoogleComputeRegionCommitmentResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_amount` <a name="reset_amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput">amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```python
amount_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionCommitmentResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>]

---


### GoogleComputeRegionCommitmentTimeoutsOutputReference <a name="GoogleComputeRegionCommitmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_commitment

googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>]

---



