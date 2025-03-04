# `googleIamOrganizationsPolicyBinding` Submodule <a name="`googleIamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationsPolicyBinding <a name="GoogleIamOrganizationsPolicyBinding" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBinding;

GoogleIamOrganizationsPolicyBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(GoogleIamOrganizationsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(GoogleIamOrganizationsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(GoogleIamOrganizationsPolicyBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition"></a>

```java
public void putCondition(GoogleIamOrganizationsPolicyBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget"></a>

```java
public void putTarget(GoogleIamOrganizationsPolicyBindingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamOrganizationsPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind"></a>

```java
public void resetPolicyKind()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBinding;

GoogleIamOrganizationsPolicyBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBinding;

GoogleIamOrganizationsPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBinding;

GoogleIamOrganizationsPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBinding;

GoogleIamOrganizationsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamOrganizationsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamOrganizationsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid">policyUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition"></a>

```java
public GoogleIamOrganizationsPolicyBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid"></a>

```java
public java.lang.String getPolicyUid();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target"></a>

```java
public GoogleIamOrganizationsPolicyBindingTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts"></a>

```java
public GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput"></a>

```java
public GoogleIamOrganizationsPolicyBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```java
public java.lang.String getPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput"></a>

```java
public java.lang.String getPolicyKindInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput"></a>

```java
public GoogleIamOrganizationsPolicyBindingTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationsPolicyBindingCondition <a name="GoogleIamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingCondition;

GoogleIamOrganizationsPolicyBindingCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#description GoogleIamOrganizationsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#expression GoogleIamOrganizationsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#title GoogleIamOrganizationsPolicyBinding#title}

---

### GoogleIamOrganizationsPolicyBindingConfig <a name="GoogleIamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingConfig;

GoogleIamOrganizationsPolicyBindingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(GoogleIamOrganizationsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(GoogleIamOrganizationsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(GoogleIamOrganizationsPolicyBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target"></a>

```java
public GoogleIamOrganizationsPolicyBindingTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition"></a>

```java
public GoogleIamOrganizationsPolicyBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```java
public GoogleIamOrganizationsPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

### GoogleIamOrganizationsPolicyBindingTarget <a name="GoogleIamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingTarget;

GoogleIamOrganizationsPolicyBindingTarget.builder()
//  .principalSet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#principal_set GoogleIamOrganizationsPolicyBinding#principal_set}

---

### GoogleIamOrganizationsPolicyBindingTimeouts <a name="GoogleIamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingTimeouts;

GoogleIamOrganizationsPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationsPolicyBindingConditionOutputReference <a name="GoogleIamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingConditionOutputReference;

new GoogleIamOrganizationsPolicyBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleIamOrganizationsPolicyBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---


### GoogleIamOrganizationsPolicyBindingTargetOutputReference <a name="GoogleIamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingTargetOutputReference;

new GoogleIamOrganizationsPolicyBindingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```java
public void resetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```java
public java.lang.String getPrincipalSetInput();
```

- *Type:* java.lang.String

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```java
public GoogleIamOrganizationsPolicyBindingTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---


### GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference <a name="GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_organizations_policy_binding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference;

new GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

---



