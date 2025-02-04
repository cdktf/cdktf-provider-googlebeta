# `googleOrgPolicyPolicy` Submodule <a name="`googleOrgPolicyPolicy` Submodule" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrgPolicyPolicy <a name="GoogleOrgPolicyPolicy" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicy;

GoogleOrgPolicyPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .parent(java.lang.String)
//  .dryRunSpec(GoogleOrgPolicyPolicyDryRunSpec)
//  .id(java.lang.String)
//  .spec(GoogleOrgPolicyPolicySpec)
//  .timeouts(GoogleOrgPolicyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#name GoogleOrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#parent GoogleOrgPolicyPolicy#parent}

---

##### `dryRunSpec`<sup>Optional</sup> <a name="dryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dryRunSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#dry_run_spec GoogleOrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#spec GoogleOrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#timeouts GoogleOrgPolicyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec">putDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetDryRunSpec">resetDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDryRunSpec` <a name="putDryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec"></a>

```java
public void putDryRunSpec(GoogleOrgPolicyPolicyDryRunSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec"></a>

```java
public void putSpec(GoogleOrgPolicyPolicySpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleOrgPolicyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---

##### `resetDryRunSpec` <a name="resetDryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetDryRunSpec"></a>

```java
public void resetDryRunSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicy;

GoogleOrgPolicyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicy;

GoogleOrgPolicyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicy;

GoogleOrgPolicyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicy;

GoogleOrgPolicyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOrgPolicyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleOrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOrgPolicyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference">GoogleOrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpecInput">dryRunSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dryRunSpec`<sup>Required</sup> <a name="dryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpec"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecOutputReference getDryRunSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference">GoogleOrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec"></a>

```java
public GoogleOrgPolicyPolicySpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts"></a>

```java
public GoogleOrgPolicyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `dryRunSpecInput`<sup>Optional</sup> <a name="dryRunSpecInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpecInput"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpec getDryRunSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput"></a>

```java
public GoogleOrgPolicyPolicySpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrgPolicyPolicyConfig <a name="GoogleOrgPolicyPolicyConfig" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyConfig;

GoogleOrgPolicyPolicyConfig.builder()
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
    .name(java.lang.String)
    .parent(java.lang.String)
//  .dryRunSpec(GoogleOrgPolicyPolicyDryRunSpec)
//  .id(java.lang.String)
//  .spec(GoogleOrgPolicyPolicySpec)
//  .timeouts(GoogleOrgPolicyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#name GoogleOrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#parent GoogleOrgPolicyPolicy#parent}

---

##### `dryRunSpec`<sup>Optional</sup> <a name="dryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dryRunSpec"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpec getDryRunSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#dry_run_spec GoogleOrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec"></a>

```java
public GoogleOrgPolicyPolicySpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#spec GoogleOrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts"></a>

```java
public GoogleOrgPolicyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#timeouts GoogleOrgPolicyPolicy#timeouts}

---

### GoogleOrgPolicyPolicyDryRunSpec <a name="GoogleOrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpec;

GoogleOrgPolicyPolicyDryRunSpec.builder()
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .reset(java.lang.Boolean)
//  .reset(IResolvable)
//  .rules(IResolvable)
//  .rules(java.util.List<GoogleOrgPolicyPolicyDryRunSpecRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>></code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

### GoogleOrgPolicyPolicyDryRunSpecRules <a name="GoogleOrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRules;

GoogleOrgPolicyPolicyDryRunSpecRules.builder()
//  .allowAll(java.lang.String)
//  .condition(GoogleOrgPolicyPolicyDryRunSpecRulesCondition)
//  .denyAll(java.lang.String)
//  .enforce(java.lang.String)
//  .parameters(java.lang.String)
//  .values(GoogleOrgPolicyPolicyDryRunSpecRulesValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.enforce">enforce</a></code> | <code>java.lang.String</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#allow_all GoogleOrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#condition GoogleOrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#deny_all GoogleOrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#enforce GoogleOrgPolicyPolicy#enforce}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Optional.

Required for Managed Constraints if parameters defined in constraints. Pass parameter values when policy enforcement is enabled. Ensure that parameter value types match those defined in the constraint definition. For example: { "allowedLocations" : ["us-east1", "us-west1"], "allowAll" : true }

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#parameters GoogleOrgPolicyPolicy#parameters}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.values"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesValues getValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#values GoogleOrgPolicyPolicy#values}

---

### GoogleOrgPolicyPolicyDryRunSpecRulesCondition <a name="GoogleOrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition;

GoogleOrgPolicyPolicyDryRunSpecRulesCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

### GoogleOrgPolicyPolicyDryRunSpecRulesValues <a name="GoogleOrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesValues;

GoogleOrgPolicyPolicyDryRunSpecRulesValues.builder()
//  .allowedValues(java.util.List<java.lang.String>)
//  .deniedValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

### GoogleOrgPolicyPolicySpec <a name="GoogleOrgPolicyPolicySpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpec;

GoogleOrgPolicyPolicySpec.builder()
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .reset(java.lang.Boolean)
//  .reset(IResolvable)
//  .rules(IResolvable)
//  .rules(java.util.List<GoogleOrgPolicyPolicySpecRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the inheritance behavior for this 'Policy'. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>></code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

### GoogleOrgPolicyPolicySpecRules <a name="GoogleOrgPolicyPolicySpecRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRules;

GoogleOrgPolicyPolicySpecRules.builder()
//  .allowAll(java.lang.String)
//  .condition(GoogleOrgPolicyPolicySpecRulesCondition)
//  .denyAll(java.lang.String)
//  .enforce(java.lang.String)
//  .parameters(java.lang.String)
//  .values(GoogleOrgPolicyPolicySpecRulesValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>java.lang.String</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#allow_all GoogleOrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition"></a>

```java
public GoogleOrgPolicyPolicySpecRulesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#condition GoogleOrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#deny_all GoogleOrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#enforce GoogleOrgPolicyPolicy#enforce}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Optional.

Required for Managed Constraints if parameters defined in constraints. Pass parameter values when policy enforcement is enabled. Ensure that parameter value types match those defined in the constraint definition. For example: { "allowedLocations" : ["us-east1", "us-west1"], "allowAll" : true }

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#parameters GoogleOrgPolicyPolicy#parameters}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values"></a>

```java
public GoogleOrgPolicyPolicySpecRulesValues getValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#values GoogleOrgPolicyPolicy#values}

---

### GoogleOrgPolicyPolicySpecRulesCondition <a name="GoogleOrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesCondition;

GoogleOrgPolicyPolicySpecRulesCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

### GoogleOrgPolicyPolicySpecRulesValues <a name="GoogleOrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesValues;

GoogleOrgPolicyPolicySpecRulesValues.builder()
//  .allowedValues(java.util.List<java.lang.String>)
//  .deniedValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

### GoogleOrgPolicyPolicyTimeouts <a name="GoogleOrgPolicyPolicyTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyTimeouts;

GoogleOrgPolicyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrgPolicyPolicyDryRunSpecOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecOutputReference;

new GoogleOrgPolicyPolicyDryRunSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleOrgPolicyPolicyDryRunSpecRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>>

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```java
public void resetReset()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList">GoogleOrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">resetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList">GoogleOrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```java
public java.lang.Object getResetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>>

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference;

new GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesList <a name="GoogleOrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesList;

new GoogleOrgPolicyPolicyDryRunSpecRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference;

new GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```java
public void putCondition(GoogleOrgPolicyPolicyDryRunSpecRulesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```java
public void putValues(GoogleOrgPolicyPolicyDryRunSpecRulesValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```java
public void resetAllowAll()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```java
public void resetDenyAll()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference getValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```java
public java.lang.String getAllowAllInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```java
public java.lang.String getDenyAllInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesValues getValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference;

new GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```java
public void resetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```java
public java.util.List<java.lang.String> getDeniedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicyDryRunSpecRulesValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

---


### GoogleOrgPolicyPolicySpecOutputReference <a name="GoogleOrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecOutputReference;

new GoogleOrgPolicyPolicySpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleOrgPolicyPolicySpecRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>>

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset"></a>

```java
public void resetReset()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput">resetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules"></a>

```java
public GoogleOrgPolicyPolicySpecRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```java
public java.lang.Object getResetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>>

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicySpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---


### GoogleOrgPolicyPolicySpecRulesConditionOutputReference <a name="GoogleOrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference;

new GoogleOrgPolicyPolicySpecRulesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicySpecRulesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---


### GoogleOrgPolicyPolicySpecRulesList <a name="GoogleOrgPolicyPolicySpecRulesList" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesList;

new GoogleOrgPolicyPolicySpecRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get"></a>

```java
public GoogleOrgPolicyPolicySpecRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>>

---


### GoogleOrgPolicyPolicySpecRulesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesOutputReference;

new GoogleOrgPolicyPolicySpecRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```java
public void putCondition(GoogleOrgPolicyPolicySpecRulesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```java
public void putValues(GoogleOrgPolicyPolicySpecRulesValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```java
public void resetAllowAll()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```java
public void resetDenyAll()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```java
public GoogleOrgPolicyPolicySpecRulesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```java
public GoogleOrgPolicyPolicySpecRulesValuesOutputReference getValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```java
public java.lang.String getAllowAllInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```java
public GoogleOrgPolicyPolicySpecRulesCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```java
public java.lang.String getDenyAllInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```java
public GoogleOrgPolicyPolicySpecRulesValues getValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>

---


### GoogleOrgPolicyPolicySpecRulesValuesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference;

new GoogleOrgPolicyPolicySpecRulesValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```java
public void resetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```java
public java.util.List<java.lang.String> getDeniedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```java
public GoogleOrgPolicyPolicySpecRulesValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---


### GoogleOrgPolicyPolicyTimeoutsOutputReference <a name="GoogleOrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_policy.GoogleOrgPolicyPolicyTimeoutsOutputReference;

new GoogleOrgPolicyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---



