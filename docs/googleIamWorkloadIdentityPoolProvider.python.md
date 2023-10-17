# `google_iam_workload_identity_pool_provider`

Refer to the Terraform Registory for docs: [`google_iam_workload_identity_pool_provider`](https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider).

# `googleIamWorkloadIdentityPoolProvider` Submodule <a name="`googleIamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolProvider <a name="GoogleIamWorkloadIdentityPoolProvider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_provider_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  aws: GoogleIamWorkloadIdentityPoolProviderAws = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: GoogleIamWorkloadIdentityPoolProviderOidc = None,
  project: str = None,
  timeouts: GoogleIamWorkloadIdentityPoolProviderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition">attribute_condition</a></code> | <code>str</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#id GoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#project GoogleIamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#workload_identity_pool_id GoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId"></a>

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#workload_identity_pool_provider_id GoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.attributeCondition"></a>

- *Type:* str

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#attribute_condition GoogleIamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* typing.Mapping[str]

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value
  in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  Cannot exceed 127 characters.
* 'google.groups': Groups the external identity belongs to. You can grant groups
  access to resources using an IAM 'principalSet' binding; access applies to all
  members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

  ```
  {
    "google.subject":"assertion.arn",
    "attribute.aws_role":
      "assertion.arn.contains('assumed-role')"
      " ? assertion.arn.extract('{account_arn}assumed-role/')"
      "   + 'assumed-role/'"
      "   + assertion.arn.extract('assumed-role/{role_name}/')"
      " : assertion.arn",
  }
  ```
* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

  ```
  {"google.subject": "assertion.sub"}
  ```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#attribute_mapping GoogleIamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#aws GoogleIamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.description"></a>

- *Type:* str

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#description GoogleIamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#disabled GoogleIamWorkloadIdentityPoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#display_name GoogleIamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#id GoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#oidc GoogleIamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#project GoogleIamWorkloadIdentityPoolProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#timeouts GoogleIamWorkloadIdentityPoolProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAttributeCondition">reset_attribute_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAttributeMapping">reset_attribute_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetOidc">reset_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putAws"></a>

```python
def put_aws(
  account_id: str
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putAws.parameter.accountId"></a>

- *Type:* str

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#account_id GoogleIamWorkloadIdentityPoolProvider#account_id}

---

##### `put_oidc` <a name="put_oidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putOidc"></a>

```python
def put_oidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None,
  jwks_json: str = None
) -> None
```

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putOidc.parameter.issuerUri"></a>

- *Type:* str

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#issuer_uri GoogleIamWorkloadIdentityPoolProvider#issuer_uri}

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putOidc.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#allowed_audiences GoogleIamWorkloadIdentityPoolProvider#allowed_audiences}

---

###### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putOidc.parameter.jwksJson"></a>

- *Type:* str

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#jwks_json GoogleIamWorkloadIdentityPoolProvider#jwks_json}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#create GoogleIamWorkloadIdentityPoolProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#delete GoogleIamWorkloadIdentityPoolProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#update GoogleIamWorkloadIdentityPoolProvider#update}.

---

##### `reset_attribute_condition` <a name="reset_attribute_condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAttributeCondition"></a>

```python
def reset_attribute_condition() -> None
```

##### `reset_attribute_mapping` <a name="reset_attribute_mapping" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAttributeMapping"></a>

```python
def reset_attribute_mapping() -> None
```

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oidc` <a name="reset_oidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetOidc"></a>

```python
def reset_oidc() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference">GoogleIamWorkloadIdentityPoolProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference">GoogleIamWorkloadIdentityPoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeConditionInput">attribute_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeMappingInput">attribute_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.awsInput">aws_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.oidcInput">oidc_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workload_identity_pool_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.aws"></a>

```python
aws: GoogleIamWorkloadIdentityPoolProviderAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference">GoogleIamWorkloadIdentityPoolProviderAwsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.oidc"></a>

```python
oidc: GoogleIamWorkloadIdentityPoolProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference">GoogleIamWorkloadIdentityPoolProviderOidcOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.timeouts"></a>

```python
timeouts: GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference</a>

---

##### `attribute_condition_input`<sup>Optional</sup> <a name="attribute_condition_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeConditionInput"></a>

```python
attribute_condition_input: str
```

- *Type:* str

---

##### `attribute_mapping_input`<sup>Optional</sup> <a name="attribute_mapping_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeMappingInput"></a>

```python
attribute_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.awsInput"></a>

```python
aws_input: GoogleIamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.oidcInput"></a>

```python
oidc_input: GoogleIamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamWorkloadIdentityPoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>]

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `workload_identity_pool_provider_id_input`<sup>Optional</sup> <a name="workload_identity_pool_provider_id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```python
workload_identity_pool_provider_id_input: str
```

- *Type:* str

---

##### `attribute_condition`<sup>Required</sup> <a name="attribute_condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

---

##### `attribute_mapping`<sup>Required</sup> <a name="attribute_mapping" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```python
workload_identity_pool_provider_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolProviderAws <a name="GoogleIamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws(
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws.property.accountId">account_id</a></code> | <code>str</code> | The AWS account ID. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#account_id GoogleIamWorkloadIdentityPoolProvider#account_id}

---

### GoogleIamWorkloadIdentityPoolProviderConfig <a name="GoogleIamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_provider_id: str,
  attribute_condition: str = None,
  attribute_mapping: typing.Mapping[str] = None,
  aws: GoogleIamWorkloadIdentityPoolProviderAws = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  oidc: GoogleIamWorkloadIdentityPoolProviderOidc = None,
  project: str = None,
  timeouts: GoogleIamWorkloadIdentityPoolProviderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workload_identity_pool_provider_id</a></code> | <code>str</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.attributeCondition">attribute_condition</a></code> | <code>str</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.description">description</a></code> | <code>str</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#id GoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#project GoogleIamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#workload_identity_pool_id GoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workload_identity_pool_provider_id`<sup>Required</sup> <a name="workload_identity_pool_provider_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```python
workload_identity_pool_provider_id: str
```

- *Type:* str

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#workload_identity_pool_provider_id GoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `attribute_condition`<sup>Optional</sup> <a name="attribute_condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.attributeCondition"></a>

```python
attribute_condition: str
```

- *Type:* str

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#attribute_condition GoogleIamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value
  in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  Cannot exceed 127 characters.
* 'google.groups': Groups the external identity belongs to. You can grant groups
  access to resources using an IAM 'principalSet' binding; access applies to all
  members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

  ```
  {
    "google.subject":"assertion.arn",
    "attribute.aws_role":
      "assertion.arn.contains('assumed-role')"
      " ? assertion.arn.extract('{account_arn}assumed-role/')"
      "   + 'assumed-role/'"
      "   + assertion.arn.extract('assumed-role/{role_name}/')"
      " : assertion.arn",
  }
  ```
* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

  ```
  {"google.subject": "assertion.sub"}
  ```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#attribute_mapping GoogleIamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.aws"></a>

```python
aws: GoogleIamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#aws GoogleIamWorkloadIdentityPoolProvider#aws}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#description GoogleIamWorkloadIdentityPoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#disabled GoogleIamWorkloadIdentityPoolProvider#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#display_name GoogleIamWorkloadIdentityPoolProvider#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#id GoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.oidc"></a>

```python
oidc: GoogleIamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#oidc GoogleIamWorkloadIdentityPoolProvider#oidc}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#project GoogleIamWorkloadIdentityPoolProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderConfig.property.timeouts"></a>

```python
timeouts: GoogleIamWorkloadIdentityPoolProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#timeouts GoogleIamWorkloadIdentityPoolProvider#timeouts}

---

### GoogleIamWorkloadIdentityPoolProviderOidc <a name="GoogleIamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None,
  jwks_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The OIDC issuer URL. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Acceptable values for the 'aud' field (audience) in the OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.jwksJson">jwks_json</a></code> | <code>str</code> | OIDC JWKs in JSON String format. |

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#issuer_uri GoogleIamWorkloadIdentityPoolProvider#issuer_uri}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#allowed_audiences GoogleIamWorkloadIdentityPoolProvider#allowed_audiences}

---

##### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#jwks_json GoogleIamWorkloadIdentityPoolProvider#jwks_json}

---

### GoogleIamWorkloadIdentityPoolProviderTimeouts <a name="GoogleIamWorkloadIdentityPoolProviderTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#create GoogleIamWorkloadIdentityPoolProvider#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#delete GoogleIamWorkloadIdentityPoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#update GoogleIamWorkloadIdentityPoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#create GoogleIamWorkloadIdentityPoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#delete GoogleIamWorkloadIdentityPoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/resources/google_iam_workload_identity_pool_provider#update GoogleIamWorkloadIdentityPoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolProviderAwsOutputReference <a name="GoogleIamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderAws">GoogleIamWorkloadIdentityPoolProviderAws</a>

---


### GoogleIamWorkloadIdentityPoolProviderOidcOutputReference <a name="GoogleIamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson">reset_jwks_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_jwks_json` <a name="reset_jwks_json" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson"></a>

```python
def reset_jwks_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput">jwks_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `jwks_json_input`<sup>Optional</sup> <a name="jwks_json_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```python
jwks_json_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderOidc">GoogleIamWorkloadIdentityPoolProviderOidc</a>

---


### GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_provider

googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamWorkloadIdentityPoolProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolProvider.GoogleIamWorkloadIdentityPoolProviderTimeouts">GoogleIamWorkloadIdentityPoolProviderTimeouts</a>]

---



