# `googlePrivatecaCaPool` Submodule <a name="`googlePrivatecaCaPool` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCaPool <a name="GooglePrivatecaCaPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPool;

GooglePrivatecaCaPool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .tier(java.lang.String)
//  .id(java.lang.String)
//  .issuancePolicy(GooglePrivatecaCaPoolIssuancePolicy)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .publishingOptions(GooglePrivatecaCaPoolPublishingOptions)
//  .timeouts(GooglePrivatecaCaPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.issuancePolicy">issuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.publishingOptions">publishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#name GooglePrivatecaCaPool#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#tier GooglePrivatecaCaPool#tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuancePolicy`<sup>Optional</sup> <a name="issuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.issuancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#issuance_policy GooglePrivatecaCaPool#issuance_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#labels GooglePrivatecaCaPool#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}.

---

##### `publishingOptions`<sup>Optional</sup> <a name="publishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.publishingOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#publishing_options GooglePrivatecaCaPool#publishing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#timeouts GooglePrivatecaCaPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy">putIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions">putPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy">resetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions">resetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIssuancePolicy` <a name="putIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy"></a>

```java
public void putIssuancePolicy(GooglePrivatecaCaPoolIssuancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `putPublishingOptions` <a name="putPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions"></a>

```java
public void putPublishingOptions(GooglePrivatecaCaPoolPublishingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts"></a>

```java
public void putTimeouts(GooglePrivatecaCaPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId"></a>

```java
public void resetId()
```

##### `resetIssuancePolicy` <a name="resetIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy"></a>

```java
public void resetIssuancePolicy()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublishingOptions` <a name="resetPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions"></a>

```java
public void resetPublishingOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPool;

GooglePrivatecaCaPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPool;

GooglePrivatecaCaPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPool;

GooglePrivatecaCaPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPool;

GooglePrivatecaCaPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePrivatecaCaPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePrivatecaCaPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePrivatecaCaPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCaPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy">issuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions">publishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput">issuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput">publishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `issuancePolicy`<sup>Required</sup> <a name="issuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyOutputReference getIssuancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `publishingOptions`<sup>Required</sup> <a name="publishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions"></a>

```java
public GooglePrivatecaCaPoolPublishingOptionsOutputReference getPublishingOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts"></a>

```java
public GooglePrivatecaCaPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuancePolicyInput`<sup>Optional</sup> <a name="issuancePolicyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicy getIssuancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publishingOptionsInput`<sup>Optional</sup> <a name="publishingOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput"></a>

```java
public GooglePrivatecaCaPoolPublishingOptions getPublishingOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCaPoolConfig <a name="GooglePrivatecaCaPoolConfig" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolConfig;

GooglePrivatecaCaPoolConfig.builder()
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
    .name(java.lang.String)
    .tier(java.lang.String)
//  .id(java.lang.String)
//  .issuancePolicy(GooglePrivatecaCaPoolIssuancePolicy)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .publishingOptions(GooglePrivatecaCaPoolPublishingOptions)
//  .timeouts(GooglePrivatecaCaPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy">issuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions">publishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#name GooglePrivatecaCaPool#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#tier GooglePrivatecaCaPool#tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuancePolicy`<sup>Optional</sup> <a name="issuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicy getIssuancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#issuance_policy GooglePrivatecaCaPool#issuance_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#labels GooglePrivatecaCaPool#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}.

---

##### `publishingOptions`<sup>Optional</sup> <a name="publishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions"></a>

```java
public GooglePrivatecaCaPoolPublishingOptions getPublishingOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#publishing_options GooglePrivatecaCaPool#publishing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts"></a>

```java
public GooglePrivatecaCaPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#timeouts GooglePrivatecaCaPool#timeouts}

---

### GooglePrivatecaCaPoolIssuancePolicy <a name="GooglePrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicy;

GooglePrivatecaCaPoolIssuancePolicy.builder()
//  .allowedIssuanceModes(GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes)
//  .allowedKeyTypes(IResolvable)
//  .allowedKeyTypes(java.util.List<GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes>)
//  .baselineValues(GooglePrivatecaCaPoolIssuancePolicyBaselineValues)
//  .identityConstraints(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints)
//  .maximumLifetime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">allowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">allowedKeyTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>></code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues">baselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime">maximumLifetime</a></code> | <code>java.lang.String</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `allowedIssuanceModes`<sup>Optional</sup> <a name="allowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes getAllowedIssuanceModes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allowed_issuance_modes GooglePrivatecaCaPool#allowed_issuance_modes}

---

##### `allowedKeyTypes`<sup>Optional</sup> <a name="allowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```java
public java.lang.Object getAllowedKeyTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>>

allowed_key_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allowed_key_types GooglePrivatecaCaPool#allowed_key_types}

---

##### `baselineValues`<sup>Optional</sup> <a name="baselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues getBaselineValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#baseline_values GooglePrivatecaCaPool#baseline_values}

---

##### `identityConstraints`<sup>Optional</sup> <a name="identityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints getIdentityConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#identity_constraints GooglePrivatecaCaPool#identity_constraints}

---

##### `maximumLifetime`<sup>Optional</sup> <a name="maximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```java
public java.lang.String getMaximumLifetime();
```

- *Type:* java.lang.String

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#maximum_lifetime GooglePrivatecaCaPool#maximum_lifetime}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;

GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.builder()
    .allowConfigBasedIssuance(java.lang.Boolean)
    .allowConfigBasedIssuance(IResolvable)
    .allowCsrBasedIssuance(java.lang.Boolean)
    .allowCsrBasedIssuance(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">allowConfigBasedIssuance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">allowCsrBasedIssuance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `allowConfigBasedIssuance`<sup>Required</sup> <a name="allowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```java
public java.lang.Object getAllowConfigBasedIssuance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allow_config_based_issuance GooglePrivatecaCaPool#allow_config_based_issuance}

---

##### `allowCsrBasedIssuance`<sup>Required</sup> <a name="allowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```java
public java.lang.Object getAllowCsrBasedIssuance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allow_csr_based_issuance GooglePrivatecaCaPool#allow_csr_based_issuance}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes;

GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.builder()
//  .ellipticCurve(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve)
//  .rsa(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">ellipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `ellipticCurve`<sup>Optional</sup> <a name="ellipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve getEllipticCurve();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#elliptic_curve GooglePrivatecaCaPool#elliptic_curve}

---

##### `rsa`<sup>Optional</sup> <a name="rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa getRsa();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#rsa GooglePrivatecaCaPool#rsa}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;

GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.builder()
    .signatureAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#signature_algorithm GooglePrivatecaCaPool#signature_algorithm}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;

GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.builder()
//  .maxModulusSize(java.lang.String)
//  .minModulusSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">maxModulusSize</a></code> | <code>java.lang.String</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">minModulusSize</a></code> | <code>java.lang.String</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `maxModulusSize`<sup>Optional</sup> <a name="maxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```java
public java.lang.String getMaxModulusSize();
```

- *Type:* java.lang.String

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#max_modulus_size GooglePrivatecaCaPool#max_modulus_size}

---

##### `minModulusSize`<sup>Optional</sup> <a name="minModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```java
public java.lang.String getMinModulusSize();
```

- *Type:* java.lang.String

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#min_modulus_size GooglePrivatecaCaPool#min_modulus_size}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValues <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues;

GooglePrivatecaCaPoolIssuancePolicyBaselineValues.builder()
    .caOptions(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions)
    .keyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage)
//  .additionalExtensions(IResolvable)
//  .additionalExtensions(java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions>)
//  .aiaOcspServers(java.util.List<java.lang.String>)
//  .nameConstraints(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints)
//  .policyIds(IResolvable)
//  .policyIds(java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">additionalExtensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>></code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">policyIds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>></code> | policy_ids block. |

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#ca_options GooglePrivatecaCaPool#ca_options}

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#key_usage GooglePrivatecaCaPool#key_usage}

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```java
public java.lang.Object getAdditionalExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>>

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#additional_extensions GooglePrivatecaCaPool#additional_extensions}

---

##### `aiaOcspServers`<sup>Optional</sup> <a name="aiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#aia_ocsp_servers GooglePrivatecaCaPool#aia_ocsp_servers}

---

##### `nameConstraints`<sup>Optional</sup> <a name="nameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints getNameConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#name_constraints GooglePrivatecaCaPool#name_constraints}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```java
public java.lang.Object getPolicyIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>>

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#policy_ids GooglePrivatecaCaPool#policy_ids}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.builder()
    .critical(java.lang.Boolean)
    .critical(IResolvable)
    .objectId(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">value</a></code> | <code>java.lang.String</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#object_id GooglePrivatecaCaPool#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#value GooglePrivatecaCaPool#value}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.builder()
//  .isCa(java.lang.Boolean)
//  .isCa(IResolvable)
//  .maxIssuerPathLength(java.lang.Number)
//  .nonCa(java.lang.Boolean)
//  .nonCa(IResolvable)
//  .zeroMaxIssuerPathLength(java.lang.Boolean)
//  .zeroMaxIssuerPathLength(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">nonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `isCa`<sup>Optional</sup> <a name="isCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#is_ca GooglePrivatecaCaPool#is_ca}

---

##### `maxIssuerPathLength`<sup>Optional</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#max_issuer_path_length GooglePrivatecaCaPool#max_issuer_path_length}

---

##### `nonCa`<sup>Optional</sup> <a name="nonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```java
public java.lang.Object getNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#non_ca GooglePrivatecaCaPool#non_ca}

---

##### `zeroMaxIssuerPathLength`<sup>Optional</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLength();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#zero_max_issuer_path_length GooglePrivatecaCaPool#zero_max_issuer_path_length}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.builder()
    .baseKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage)
    .extendedKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage)
//  .unknownExtendedKeyUsages(IResolvable)
//  .unknownExtendedKeyUsages(java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | unknown_extended_key_usages block. |

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#base_key_usage GooglePrivatecaCaPool#base_key_usage}

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#extended_key_usage GooglePrivatecaCaPool#extended_key_usage}

---

##### `unknownExtendedKeyUsages`<sup>Optional</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>>

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#unknown_extended_key_usages GooglePrivatecaCaPool#unknown_extended_key_usages}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.builder()
//  .certSign(java.lang.Boolean)
//  .certSign(IResolvable)
//  .contentCommitment(java.lang.Boolean)
//  .contentCommitment(IResolvable)
//  .crlSign(java.lang.Boolean)
//  .crlSign(IResolvable)
//  .dataEncipherment(java.lang.Boolean)
//  .dataEncipherment(IResolvable)
//  .decipherOnly(java.lang.Boolean)
//  .decipherOnly(IResolvable)
//  .digitalSignature(java.lang.Boolean)
//  .digitalSignature(IResolvable)
//  .encipherOnly(java.lang.Boolean)
//  .encipherOnly(IResolvable)
//  .keyAgreement(java.lang.Boolean)
//  .keyAgreement(IResolvable)
//  .keyEncipherment(java.lang.Boolean)
//  .keyEncipherment(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher other keys. |

---

##### `certSign`<sup>Optional</sup> <a name="certSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#cert_sign GooglePrivatecaCaPool#cert_sign}

---

##### `contentCommitment`<sup>Optional</sup> <a name="contentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#content_commitment GooglePrivatecaCaPool#content_commitment}

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#crl_sign GooglePrivatecaCaPool#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#data_encipherment GooglePrivatecaCaPool#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#decipher_only GooglePrivatecaCaPool#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#digital_signature GooglePrivatecaCaPool#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#encipher_only GooglePrivatecaCaPool#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#key_agreement GooglePrivatecaCaPool#key_agreement}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#key_encipherment GooglePrivatecaCaPool#key_encipherment}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.builder()
//  .clientAuth(java.lang.Boolean)
//  .clientAuth(IResolvable)
//  .codeSigning(java.lang.Boolean)
//  .codeSigning(IResolvable)
//  .emailProtection(java.lang.Boolean)
//  .emailProtection(IResolvable)
//  .ocspSigning(java.lang.Boolean)
//  .ocspSigning(IResolvable)
//  .serverAuth(java.lang.Boolean)
//  .serverAuth(IResolvable)
//  .timeStamping(java.lang.Boolean)
//  .timeStamping(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#client_auth GooglePrivatecaCaPool#client_auth}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#code_signing GooglePrivatecaCaPool#code_signing}

---

##### `emailProtection`<sup>Optional</sup> <a name="emailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#email_protection GooglePrivatecaCaPool#email_protection}

---

##### `ocspSigning`<sup>Optional</sup> <a name="ocspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#ocsp_signing GooglePrivatecaCaPool#ocsp_signing}

---

##### `serverAuth`<sup>Optional</sup> <a name="serverAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#server_auth GooglePrivatecaCaPool#server_auth}

---

##### `timeStamping`<sup>Optional</sup> <a name="timeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#time_stamping GooglePrivatecaCaPool#time_stamping}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.builder()
    .critical(java.lang.Boolean)
    .critical(IResolvable)
//  .excludedDnsNames(java.util.List<java.lang.String>)
//  .excludedEmailAddresses(java.util.List<java.lang.String>)
//  .excludedIpRanges(java.util.List<java.lang.String>)
//  .excludedUris(java.util.List<java.lang.String>)
//  .permittedDnsNames(java.util.List<java.lang.String>)
//  .permittedEmailAddresses(java.util.List<java.lang.String>)
//  .permittedIpRanges(java.util.List<java.lang.String>)
//  .permittedUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">excludedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">excludedUris</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">permittedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">permittedUris</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `excludedDnsNames`<sup>Optional</sup> <a name="excludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#excluded_dns_names GooglePrivatecaCaPool#excluded_dns_names}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#excluded_email_addresses GooglePrivatecaCaPool#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#excluded_ip_ranges GooglePrivatecaCaPool#excluded_ip_ranges}

---

##### `excludedUris`<sup>Optional</sup> <a name="excludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```java
public java.util.List<java.lang.String> getExcludedUris();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#excluded_uris GooglePrivatecaCaPool#excluded_uris}

---

##### `permittedDnsNames`<sup>Optional</sup> <a name="permittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#permitted_dns_names GooglePrivatecaCaPool#permitted_dns_names}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#permitted_email_addresses GooglePrivatecaCaPool#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#permitted_ip_ranges GooglePrivatecaCaPool#permitted_ip_ranges}

---

##### `permittedUris`<sup>Optional</sup> <a name="permittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```java
public java.util.List<java.lang.String> getPermittedUris();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#permitted_uris GooglePrivatecaCaPool#permitted_uris}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds;

GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints;

GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.builder()
    .allowSubjectAltNamesPassthrough(java.lang.Boolean)
    .allowSubjectAltNamesPassthrough(IResolvable)
    .allowSubjectPassthrough(java.lang.Boolean)
    .allowSubjectPassthrough(IResolvable)
//  .celExpression(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allow_subject_alt_names_passthrough GooglePrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```java
public java.lang.Object getAllowSubjectPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#allow_subject_passthrough GooglePrivatecaCaPool#allow_subject_passthrough}

---

##### `celExpression`<sup>Optional</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression getCelExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#cel_expression GooglePrivatecaCaPool#cel_expression}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;

GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#expression GooglePrivatecaCaPool#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#description GooglePrivatecaCaPool#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#title GooglePrivatecaCaPool#title}

---

### GooglePrivatecaCaPoolPublishingOptions <a name="GooglePrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolPublishingOptions;

GooglePrivatecaCaPoolPublishingOptions.builder()
    .publishCaCert(java.lang.Boolean)
    .publishCaCert(IResolvable)
    .publishCrl(java.lang.Boolean)
    .publishCrl(IResolvable)
//  .encodingFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert">publishCaCert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl">publishCrl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat">encodingFormat</a></code> | <code>java.lang.String</code> | Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. |

---

##### `publishCaCert`<sup>Required</sup> <a name="publishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```java
public java.lang.Object getPublishCaCert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#publish_ca_cert GooglePrivatecaCaPool#publish_ca_cert}

---

##### `publishCrl`<sup>Required</sup> <a name="publishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```java
public java.lang.Object getPublishCrl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#publish_crl GooglePrivatecaCaPool#publish_crl}

---

##### `encodingFormat`<sup>Optional</sup> <a name="encodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat"></a>

```java
public java.lang.String getEncodingFormat();
```

- *Type:* java.lang.String

Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs.

If this is omitted, CA certificates and CRLs
will be published in PEM. Possible values: ["PEM", "DER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#encoding_format GooglePrivatecaCaPool#encoding_format}

---

### GooglePrivatecaCaPoolTimeouts <a name="GooglePrivatecaCaPoolTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolTimeouts;

GooglePrivatecaCaPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">allowConfigBasedIssuanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">allowCsrBasedIssuanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">allowConfigBasedIssuance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">allowCsrBasedIssuance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="allowConfigBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```java
public java.lang.Object getAllowConfigBasedIssuanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="allowCsrBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```java
public java.lang.Object getAllowCsrBasedIssuanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowConfigBasedIssuance`<sup>Required</sup> <a name="allowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```java
public java.lang.Object getAllowConfigBasedIssuance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCsrBasedIssuance`<sup>Required</sup> <a name="allowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```java
public java.lang.Object getAllowCsrBasedIssuance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">putEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">putRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">resetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">resetRsa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEllipticCurve` <a name="putEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```java
public void putEllipticCurve(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `putRsa` <a name="putRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```java
public void putRsa(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `resetEllipticCurve` <a name="resetEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```java
public void resetEllipticCurve()
```

##### `resetRsa` <a name="resetRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```java
public void resetRsa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">ellipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">ellipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">rsaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ellipticCurve`<sup>Required</sup> <a name="ellipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference getEllipticCurve();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `rsa`<sup>Required</sup> <a name="rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference getRsa();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `ellipticCurveInput`<sup>Optional</sup> <a name="ellipticCurveInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve getEllipticCurveInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `rsaInput`<sup>Optional</sup> <a name="rsaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa getRsaInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">resetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">resetMinModulusSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxModulusSize` <a name="resetMaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```java
public void resetMaxModulusSize()
```

##### `resetMinModulusSize` <a name="resetMinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```java
public void resetMinModulusSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">maxModulusSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">minModulusSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">maxModulusSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">minModulusSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxModulusSizeInput`<sup>Optional</sup> <a name="maxModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```java
public java.lang.String getMaxModulusSizeInput();
```

- *Type:* java.lang.String

---

##### `minModulusSizeInput`<sup>Optional</sup> <a name="minModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```java
public java.lang.String getMinModulusSizeInput();
```

- *Type:* java.lang.String

---

##### `maxModulusSize`<sup>Required</sup> <a name="maxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```java
public java.lang.String getMaxModulusSize();
```

- *Type:* java.lang.String

---

##### `minModulusSize`<sup>Required</sup> <a name="minModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```java
public java.lang.String getMinModulusSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">putObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectId` <a name="putObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```java
public void putObjectId(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">objectIdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId getObjectIdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">resetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">resetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">resetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">resetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCa` <a name="resetIsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```java
public void resetIsCa()
```

##### `resetMaxIssuerPathLength` <a name="resetMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```java
public void resetMaxIssuerPathLength()
```

##### `resetNonCa` <a name="resetNonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```java
public void resetNonCa()
```

##### `resetZeroMaxIssuerPathLength` <a name="resetZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```java
public void resetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">isCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">maxIssuerPathLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">nonCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">zeroMaxIssuerPathLengthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">nonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isCaInput`<sup>Optional</sup> <a name="isCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```java
public java.lang.Object getIsCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLengthInput`<sup>Optional</sup> <a name="maxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```java
public java.lang.Number getMaxIssuerPathLengthInput();
```

- *Type:* java.lang.Number

---

##### `nonCaInput`<sup>Optional</sup> <a name="nonCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```java
public java.lang.Object getNonCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="zeroMaxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLengthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLength`<sup>Required</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

---

##### `nonCa`<sup>Required</sup> <a name="nonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```java
public java.lang.Object getNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zeroMaxIssuerPathLength`<sup>Required</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLength();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">resetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">resetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertSign` <a name="resetCertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```java
public void resetCertSign()
```

##### `resetContentCommitment` <a name="resetContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```java
public void resetContentCommitment()
```

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```java
public void resetCrlSign()
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```java
public void resetDataEncipherment()
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```java
public void resetDecipherOnly()
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```java
public void resetDigitalSignature()
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```java
public void resetEncipherOnly()
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```java
public void resetKeyAgreement()
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```java
public void resetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">certSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">contentCommitmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certSignInput`<sup>Optional</sup> <a name="certSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```java
public java.lang.Object getCertSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitmentInput`<sup>Optional</sup> <a name="contentCommitmentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```java
public java.lang.Object getContentCommitmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```java
public java.lang.Object getCrlSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```java
public java.lang.Object getDataEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```java
public java.lang.Object getDecipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```java
public java.lang.Object getDigitalSignatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```java
public java.lang.Object getEncipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```java
public java.lang.Object getKeyAgreementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```java
public java.lang.Object getKeyEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certSign`<sup>Required</sup> <a name="certSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitment`<sup>Required</sup> <a name="contentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">resetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">resetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">resetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">resetTimeStamping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```java
public void resetClientAuth()
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```java
public void resetCodeSigning()
```

##### `resetEmailProtection` <a name="resetEmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```java
public void resetEmailProtection()
```

##### `resetOcspSigning` <a name="resetOcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```java
public void resetOcspSigning()
```

##### `resetServerAuth` <a name="resetServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```java
public void resetServerAuth()
```

##### `resetTimeStamping` <a name="resetTimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```java
public void resetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">clientAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">emailProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocspSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">serverAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">timeStampingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```java
public java.lang.Object getClientAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```java
public java.lang.Object getCodeSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtectionInput`<sup>Optional</sup> <a name="emailProtectionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```java
public java.lang.Object getEmailProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigningInput`<sup>Optional</sup> <a name="ocspSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```java
public java.lang.Object getOcspSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuthInput`<sup>Optional</sup> <a name="serverAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```java
public java.lang.Object getServerAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStampingInput`<sup>Optional</sup> <a name="timeStampingInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```java
public java.lang.Object getTimeStampingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientAuth`<sup>Required</sup> <a name="clientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtection`<sup>Required</sup> <a name="emailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigning`<sup>Required</sup> <a name="ocspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuth`<sup>Required</sup> <a name="serverAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStamping`<sup>Required</sup> <a name="timeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">putBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">putUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">resetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseKeyUsage` <a name="putBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```java
public void putBaseKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```java
public void putExtendedKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `putUnknownExtendedKeyUsages` <a name="putUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```java
public void putUnknownExtendedKeyUsages(IResolvable OR java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `resetUnknownExtendedKeyUsages` <a name="resetUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```java
public void resetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">baseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknownExtendedKeyUsagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknownExtendedKeyUsages`<sup>Required</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList getUnknownExtendedKeyUsages();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `baseKeyUsageInput`<sup>Optional</sup> <a name="baseKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage getBaseKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage getExtendedKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `unknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="unknownExtendedKeyUsagesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">resetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">resetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">resetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">resetPermittedUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDnsNames` <a name="resetExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```java
public void resetExcludedDnsNames()
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```java
public void resetExcludedEmailAddresses()
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```java
public void resetExcludedIpRanges()
```

##### `resetExcludedUris` <a name="resetExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```java
public void resetExcludedUris()
```

##### `resetPermittedDnsNames` <a name="resetPermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```java
public void resetPermittedDnsNames()
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```java
public void resetPermittedEmailAddresses()
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```java
public void resetPermittedIpRanges()
```

##### `resetPermittedUris` <a name="resetPermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```java
public void resetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">excludedDnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">excludedUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">permittedDnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">permittedUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">excludedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">excludedUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">permittedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">permittedUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsNamesInput`<sup>Optional</sup> <a name="excludedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUrisInput`<sup>Optional</sup> <a name="excludedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```java
public java.util.List<java.lang.String> getExcludedUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedDnsNamesInput`<sup>Optional</sup> <a name="permittedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUrisInput`<sup>Optional</sup> <a name="permittedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```java
public java.util.List<java.lang.String> getPermittedUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsNames`<sup>Required</sup> <a name="excludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUris`<sup>Required</sup> <a name="excludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```java
public java.util.List<java.lang.String> getExcludedUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedDnsNames`<sup>Required</sup> <a name="permittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUris`<sup>Required</sup> <a name="permittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```java
public java.util.List<java.lang.String> getPermittedUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">putCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">putNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">putPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">resetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">resetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```java
public void putAdditionalExtensions(IResolvable OR java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>>

---

##### `putCaOptions` <a name="putCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```java
public void putCaOptions(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```java
public void putKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `putNameConstraints` <a name="putNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```java
public void putNameConstraints(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `putPolicyIds` <a name="putPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```java
public void putPolicyIds(IResolvable OR java.util.List<GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>>

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```java
public void resetAdditionalExtensions()
```

##### `resetAiaOcspServers` <a name="resetAiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```java
public void resetAiaOcspServers()
```

##### `resetNameConstraints` <a name="resetNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```java
public void resetNameConstraints()
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```java
public void resetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">policyIds</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">aiaOcspServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">caOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">nameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">policyIdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList getAdditionalExtensions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `nameConstraints`<sup>Required</sup> <a name="nameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference getNameConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList getPolicyIds();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```java
public java.lang.Object getAdditionalExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>>

---

##### `aiaOcspServersInput`<sup>Optional</sup> <a name="aiaOcspServersInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caOptionsInput`<sup>Optional</sup> <a name="caOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions getCaOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage getKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `nameConstraintsInput`<sup>Optional</sup> <a name="nameConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints getNameConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```java
public java.lang.Object getPolicyIdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>>

---

##### `aiaOcspServers`<sup>Required</sup> <a name="aiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">putCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">resetCelExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCelExpression` <a name="putCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```java
public void putCelExpression(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `resetCelExpression` <a name="resetCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```java
public void resetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">allowSubjectAltNamesPassthroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">allowSubjectPassthroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference getCelExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `allowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="allowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubjectPassthroughInput`<sup>Optional</sup> <a name="allowSubjectPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```java
public java.lang.Object getAllowSubjectPassthroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression getCelExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```java
public java.lang.Object getAllowSubjectPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolIssuancePolicyOutputReference;

new GooglePrivatecaCaPoolIssuancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">putAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">putAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">putBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">putIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">resetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">resetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">resetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">resetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">resetMaximumLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedIssuanceModes` <a name="putAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```java
public void putAllowedIssuanceModes(GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `putAllowedKeyTypes` <a name="putAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```java
public void putAllowedKeyTypes(IResolvable OR java.util.List<GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>>

---

##### `putBaselineValues` <a name="putBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```java
public void putBaselineValues(GooglePrivatecaCaPoolIssuancePolicyBaselineValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `putIdentityConstraints` <a name="putIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```java
public void putIdentityConstraints(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `resetAllowedIssuanceModes` <a name="resetAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```java
public void resetAllowedIssuanceModes()
```

##### `resetAllowedKeyTypes` <a name="resetAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```java
public void resetAllowedKeyTypes()
```

##### `resetBaselineValues` <a name="resetBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```java
public void resetBaselineValues()
```

##### `resetIdentityConstraints` <a name="resetIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```java
public void resetIdentityConstraints()
```

##### `resetMaximumLifetime` <a name="resetMaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```java
public void resetMaximumLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">allowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">allowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">baselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">allowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">allowedKeyTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">baselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">identityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">maximumLifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">maximumLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIssuanceModes`<sup>Required</sup> <a name="allowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference getAllowedIssuanceModes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `allowedKeyTypes`<sup>Required</sup> <a name="allowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList getAllowedKeyTypes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `baselineValues`<sup>Required</sup> <a name="baselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference getBaselineValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `identityConstraints`<sup>Required</sup> <a name="identityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference getIdentityConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `allowedIssuanceModesInput`<sup>Optional</sup> <a name="allowedIssuanceModesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes getAllowedIssuanceModesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `allowedKeyTypesInput`<sup>Optional</sup> <a name="allowedKeyTypesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```java
public java.lang.Object getAllowedKeyTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>>

---

##### `baselineValuesInput`<sup>Optional</sup> <a name="baselineValuesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues getBaselineValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `identityConstraintsInput`<sup>Optional</sup> <a name="identityConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints getIdentityConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `maximumLifetimeInput`<sup>Optional</sup> <a name="maximumLifetimeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```java
public java.lang.String getMaximumLifetimeInput();
```

- *Type:* java.lang.String

---

##### `maximumLifetime`<sup>Required</sup> <a name="maximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```java
public java.lang.String getMaximumLifetime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIssuancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---


### GooglePrivatecaCaPoolPublishingOptionsOutputReference <a name="GooglePrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolPublishingOptionsOutputReference;

new GooglePrivatecaCaPoolPublishingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat">resetEncodingFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncodingFormat` <a name="resetEncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat"></a>

```java
public void resetEncodingFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput">encodingFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">publishCaCertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">publishCrlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat">encodingFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">publishCaCert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">publishCrl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingFormatInput`<sup>Optional</sup> <a name="encodingFormatInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput"></a>

```java
public java.lang.String getEncodingFormatInput();
```

- *Type:* java.lang.String

---

##### `publishCaCertInput`<sup>Optional</sup> <a name="publishCaCertInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```java
public java.lang.Object getPublishCaCertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishCrlInput`<sup>Optional</sup> <a name="publishCrlInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```java
public java.lang.Object getPublishCrlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encodingFormat`<sup>Required</sup> <a name="encodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat"></a>

```java
public java.lang.String getEncodingFormat();
```

- *Type:* java.lang.String

---

##### `publishCaCert`<sup>Required</sup> <a name="publishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```java
public java.lang.Object getPublishCaCert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishCrl`<sup>Required</sup> <a name="publishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```java
public java.lang.Object getPublishCrl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolPublishingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---


### GooglePrivatecaCaPoolTimeoutsOutputReference <a name="GooglePrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool.GooglePrivatecaCaPoolTimeoutsOutputReference;

new GooglePrivatecaCaPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

---



