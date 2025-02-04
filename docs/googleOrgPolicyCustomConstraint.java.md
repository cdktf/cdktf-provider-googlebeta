# `googleOrgPolicyCustomConstraint` Submodule <a name="`googleOrgPolicyCustomConstraint` Submodule" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrgPolicyCustomConstraint <a name="GoogleOrgPolicyCustomConstraint" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint google_org_policy_custom_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraint;

GoogleOrgPolicyCustomConstraint.Builder.create(Construct scope, java.lang.String id)
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
    .actionType(java.lang.String)
    .condition(java.lang.String)
    .methodTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .resourceTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleOrgPolicyCustomConstraintTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.actionType">actionType</a></code> | <code>java.lang.String</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.condition">condition</a></code> | <code>java.lang.String</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#id GoogleOrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.actionType"></a>

- *Type:* java.lang.String

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#action_type GoogleOrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.condition"></a>

- *Type:* java.lang.String

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#condition GoogleOrgPolicyCustomConstraint#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.methodTypes"></a>

- *Type:* java.util.List<java.lang.String>

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#method_types GoogleOrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#name GoogleOrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#parent GoogleOrgPolicyCustomConstraint#parent}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.resourceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#resource_types GoogleOrgPolicyCustomConstraint#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#description GoogleOrgPolicyCustomConstraint#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#display_name GoogleOrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#id GoogleOrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#timeouts GoogleOrgPolicyCustomConstraint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.putTimeouts"></a>

```java
public void putTimeouts(GoogleOrgPolicyCustomConstraintTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraint;

GoogleOrgPolicyCustomConstraint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraint;

GoogleOrgPolicyCustomConstraint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraint;

GoogleOrgPolicyCustomConstraint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraint;

GoogleOrgPolicyCustomConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOrgPolicyCustomConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleOrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOrgPolicyCustomConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOrgPolicyCustomConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrgPolicyCustomConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference">GoogleOrgPolicyCustomConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.methodTypesInput">methodTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.timeouts"></a>

```java
public GoogleOrgPolicyCustomConstraintTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference">GoogleOrgPolicyCustomConstraintTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `methodTypesInput`<sup>Optional</sup> <a name="methodTypesInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.methodTypesInput"></a>

```java
public java.util.List<java.lang.String> getMethodTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.methodTypes"></a>

```java
public java.util.List<java.lang.String> getMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrgPolicyCustomConstraintConfig <a name="GoogleOrgPolicyCustomConstraintConfig" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraintConfig;

GoogleOrgPolicyCustomConstraintConfig.builder()
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
    .actionType(java.lang.String)
    .condition(java.lang.String)
    .methodTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .resourceTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleOrgPolicyCustomConstraintTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.actionType">actionType</a></code> | <code>java.lang.String</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.condition">condition</a></code> | <code>java.lang.String</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#id GoogleOrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#action_type GoogleOrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#condition GoogleOrgPolicyCustomConstraint#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.methodTypes"></a>

```java
public java.util.List<java.lang.String> getMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#method_types GoogleOrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#name GoogleOrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#parent GoogleOrgPolicyCustomConstraint#parent}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#resource_types GoogleOrgPolicyCustomConstraint#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#description GoogleOrgPolicyCustomConstraint#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#display_name GoogleOrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#id GoogleOrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintConfig.property.timeouts"></a>

```java
public GoogleOrgPolicyCustomConstraintTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#timeouts GoogleOrgPolicyCustomConstraint#timeouts}

---

### GoogleOrgPolicyCustomConstraintTimeouts <a name="GoogleOrgPolicyCustomConstraintTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraintTimeouts;

GoogleOrgPolicyCustomConstraintTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#create GoogleOrgPolicyCustomConstraint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#delete GoogleOrgPolicyCustomConstraint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#update GoogleOrgPolicyCustomConstraint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#create GoogleOrgPolicyCustomConstraint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#delete GoogleOrgPolicyCustomConstraint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_org_policy_custom_constraint#update GoogleOrgPolicyCustomConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrgPolicyCustomConstraintTimeoutsOutputReference <a name="GoogleOrgPolicyCustomConstraintTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_org_policy_custom_constraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference;

new GoogleOrgPolicyCustomConstraintTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOrgPolicyCustomConstraint.GoogleOrgPolicyCustomConstraintTimeouts">GoogleOrgPolicyCustomConstraintTimeouts</a>

---



