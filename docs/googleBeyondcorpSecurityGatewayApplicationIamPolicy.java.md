# `googleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule <a name="`googleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamPolicy <a name="GoogleBeyondcorpSecurityGatewayApplicationIamPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy google_beyondcorp_security_gateway_application_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policyData(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#application_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#policy_data GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#project GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#application_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#policy_data GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#project GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpSecurityGatewayApplicationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyDataInput"></a>

```java
public java.lang.String getPolicyDataInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application_iam_policy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig;

GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.builder()
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
    .policyData(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#application_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#policy_data GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#project GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#application_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#policy_data GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#policy_data}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#id GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamPolicy.GoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_beyondcorp_security_gateway_application_iam_policy#project GoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---



