# `googleBeyondcorpSecurityGatewayApplicationIamBinding` Submodule <a name="`googleBeyondcorpSecurityGatewayApplicationIamBinding` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamBinding <a name="GoogleBeyondcorpSecurityGatewayApplicationIamBinding" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding google_beyondcorp_security_gateway_application_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding;

GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .condition(GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#application_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#members GoogleBeyondcorpSecurityGatewayApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#role GoogleBeyondcorpSecurityGatewayApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#project GoogleBeyondcorpSecurityGatewayApplicationIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#application_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#application_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#members GoogleBeyondcorpSecurityGatewayApplicationIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#role GoogleBeyondcorpSecurityGatewayApplicationIamBinding#role}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#security_gateway_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#condition GoogleBeyondcorpSecurityGatewayApplicationIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#project GoogleBeyondcorpSecurityGatewayApplicationIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.putCondition"></a>

```java
public void putCondition(GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding;

GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding;

GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding;

GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding;

GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplicationIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpSecurityGatewayApplicationIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplicationIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.condition"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.conditionInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition <a name="GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition;

GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#expression GoogleBeyondcorpSecurityGatewayApplicationIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#title GoogleBeyondcorpSecurityGatewayApplicationIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#description GoogleBeyondcorpSecurityGatewayApplicationIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#expression GoogleBeyondcorpSecurityGatewayApplicationIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#title GoogleBeyondcorpSecurityGatewayApplicationIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#description GoogleBeyondcorpSecurityGatewayApplicationIamBinding#description}.

---

### GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig;

GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.builder()
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
    .applicationId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .condition(GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#application_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#members GoogleBeyondcorpSecurityGatewayApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#role GoogleBeyondcorpSecurityGatewayApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#project GoogleBeyondcorpSecurityGatewayApplicationIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#application_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#application_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#members GoogleBeyondcorpSecurityGatewayApplicationIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#role GoogleBeyondcorpSecurityGatewayApplicationIamBinding#role}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#security_gateway_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.condition"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#condition GoogleBeyondcorpSecurityGatewayApplicationIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#id GoogleBeyondcorpSecurityGatewayApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_binding#project GoogleBeyondcorpSecurityGatewayApplicationIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_binding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamBinding.GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition">GoogleBeyondcorpSecurityGatewayApplicationIamBindingCondition</a>

---



