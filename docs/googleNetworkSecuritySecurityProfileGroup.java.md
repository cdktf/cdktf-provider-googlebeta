# `googleNetworkSecuritySecurityProfileGroup` Submodule <a name="`googleNetworkSecuritySecurityProfileGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySecurityProfileGroup <a name="GoogleNetworkSecuritySecurityProfileGroup" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group google_network_security_security_profile_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroup;

GoogleNetworkSecuritySecurityProfileGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .threatPreventionProfile(java.lang.String)
//  .timeouts(GoogleNetworkSecuritySecurityProfileGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile">threatPreventionProfile</a></code> | <code>java.lang.String</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#name GoogleNetworkSecuritySecurityProfileGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#description GoogleNetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#labels GoogleNetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#location GoogleNetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#parent GoogleNetworkSecuritySecurityProfileGroup#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* java.lang.String

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#threat_prevention_profile GoogleNetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#timeouts GoogleNetworkSecuritySecurityProfileGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile">resetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecuritySecurityProfileGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetParent"></a>

```java
public void resetParent()
```

##### `resetThreatPreventionProfile` <a name="resetThreatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile"></a>

```java
public void resetThreatPreventionProfile()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroup;

GoogleNetworkSecuritySecurityProfileGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroup;

GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroup;

GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroup;

GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfileGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecuritySecurityProfileGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfileGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput">threatPreventionProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeouts"></a>

```java
public GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `threatPreventionProfileInput`<sup>Optional</sup> <a name="threatPreventionProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput"></a>

```java
public java.lang.String getThreatPreventionProfileInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `threatPreventionProfile`<sup>Required</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfile"></a>

```java
public java.lang.String getThreatPreventionProfile();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySecurityProfileGroupConfig <a name="GoogleNetworkSecuritySecurityProfileGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroupConfig;

GoogleNetworkSecuritySecurityProfileGroupConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .threatPreventionProfile(java.lang.String)
//  .timeouts(GoogleNetworkSecuritySecurityProfileGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code>java.lang.String</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#name GoogleNetworkSecuritySecurityProfileGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#description GoogleNetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#labels GoogleNetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#location GoogleNetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#parent GoogleNetworkSecuritySecurityProfileGroup#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile"></a>

```java
public java.lang.String getThreatPreventionProfile();
```

- *Type:* java.lang.String

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#threat_prevention_profile GoogleNetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.timeouts"></a>

```java
public GoogleNetworkSecuritySecurityProfileGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#timeouts GoogleNetworkSecuritySecurityProfileGroup#timeouts}

---

### GoogleNetworkSecuritySecurityProfileGroupTimeouts <a name="GoogleNetworkSecuritySecurityProfileGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroupTimeouts;

GoogleNetworkSecuritySecurityProfileGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#create GoogleNetworkSecuritySecurityProfileGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#delete GoogleNetworkSecuritySecurityProfileGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#update GoogleNetworkSecuritySecurityProfileGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#create GoogleNetworkSecuritySecurityProfileGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#delete GoogleNetworkSecuritySecurityProfileGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_security_profile_group#update GoogleNetworkSecuritySecurityProfileGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference <a name="GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_security_profile_group.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference;

new GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

---



