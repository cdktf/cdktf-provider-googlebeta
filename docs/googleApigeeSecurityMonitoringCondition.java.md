# `googleApigeeSecurityMonitoringCondition` Submodule <a name="`googleApigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityMonitoringCondition <a name="GoogleApigeeSecurityMonitoringCondition" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringCondition;

GoogleApigeeSecurityMonitoringCondition.Builder.create(Construct scope, java.lang.String id)
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
    .conditionId(java.lang.String)
    .orgId(java.lang.String)
    .profile(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .includeAllResources(GoogleApigeeSecurityMonitoringConditionIncludeAllResources)
//  .timeouts(GoogleApigeeSecurityMonitoringConditionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.conditionId">conditionId</a></code> | <code>java.lang.String</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.includeAllResources">includeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionId`<sup>Required</sup> <a name="conditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.conditionId"></a>

- *Type:* java.lang.String

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#condition_id GoogleApigeeSecurityMonitoringCondition#condition_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#org_id GoogleApigeeSecurityMonitoringCondition#org_id}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#profile GoogleApigeeSecurityMonitoringCondition#profile}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#scope GoogleApigeeSecurityMonitoringCondition#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeAllResources`<sup>Optional</sup> <a name="includeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.includeAllResources"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#include_all_resources GoogleApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#timeouts GoogleApigeeSecurityMonitoringCondition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources">putIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources">resetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncludeAllResources` <a name="putIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```java
public void putIncludeAllResources(GoogleApigeeSecurityMonitoringConditionIncludeAllResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeSecurityMonitoringConditionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeAllResources` <a name="resetIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```java
public void resetIncludeAllResources()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringCondition;

GoogleApigeeSecurityMonitoringCondition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringCondition;

GoogleApigeeSecurityMonitoringCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringCondition;

GoogleApigeeSecurityMonitoringCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringCondition;

GoogleApigeeSecurityMonitoringCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeSecurityMonitoringCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeSecurityMonitoringCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources">includeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources">totalDeployedResources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources">totalMonitoredResources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput">conditionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">includeAllResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId">conditionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `includeAllResources`<sup>Required</sup> <a name="includeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```java
public GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference getIncludeAllResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts"></a>

```java
public GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `totalDeployedResources`<sup>Required</sup> <a name="totalDeployedResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```java
public java.lang.Number getTotalDeployedResources();
```

- *Type:* java.lang.Number

---

##### `totalMonitoredResources`<sup>Required</sup> <a name="totalMonitoredResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```java
public java.lang.Number getTotalMonitoredResources();
```

- *Type:* java.lang.Number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `conditionIdInput`<sup>Optional</sup> <a name="conditionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```java
public java.lang.String getConditionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeAllResourcesInput`<sup>Optional</sup> <a name="includeAllResourcesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```java
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources getIncludeAllResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `conditionId`<sup>Required</sup> <a name="conditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId"></a>

```java
public java.lang.String getConditionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityMonitoringConditionConfig <a name="GoogleApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringConditionConfig;

GoogleApigeeSecurityMonitoringConditionConfig.builder()
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
    .conditionId(java.lang.String)
    .orgId(java.lang.String)
    .profile(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .includeAllResources(GoogleApigeeSecurityMonitoringConditionIncludeAllResources)
//  .timeouts(GoogleApigeeSecurityMonitoringConditionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId">conditionId</a></code> | <code>java.lang.String</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources">includeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionId`<sup>Required</sup> <a name="conditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```java
public java.lang.String getConditionId();
```

- *Type:* java.lang.String

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#condition_id GoogleApigeeSecurityMonitoringCondition#condition_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#org_id GoogleApigeeSecurityMonitoringCondition#org_id}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#profile GoogleApigeeSecurityMonitoringCondition#profile}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#scope GoogleApigeeSecurityMonitoringCondition#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeAllResources`<sup>Optional</sup> <a name="includeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```java
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources getIncludeAllResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#include_all_resources GoogleApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```java
public GoogleApigeeSecurityMonitoringConditionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#timeouts GoogleApigeeSecurityMonitoringCondition#timeouts}

---

### GoogleApigeeSecurityMonitoringConditionIncludeAllResources <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources;

GoogleApigeeSecurityMonitoringConditionIncludeAllResources.builder()
    .build();
```


### GoogleApigeeSecurityMonitoringConditionTimeouts <a name="GoogleApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringConditionTimeouts;

GoogleApigeeSecurityMonitoringConditionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference;

new GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```java
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_monitoring_condition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference;

new GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---



