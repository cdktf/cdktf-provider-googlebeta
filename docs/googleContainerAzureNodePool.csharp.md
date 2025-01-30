# `googleContainerAzureNodePool` Submodule <a name="`googleContainerAzureNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureNodePool <a name="GoogleContainerAzureNodePool" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePool(Construct Scope, string Id, GoogleContainerAzureNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig">GoogleContainerAzureNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig">GoogleContainerAzureNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint">PutMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone">ResetAzureAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling"></a>

```csharp
private void PutAutoscaling(GoogleContainerAzureNodePoolAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig"></a>

```csharp
private void PutConfig(GoogleContainerAzureNodePoolConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement"></a>

```csharp
private void PutManagement(GoogleContainerAzureNodePoolManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `PutMaxPodsConstraint` <a name="PutMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint"></a>

```csharp
private void PutMaxPodsConstraint(GoogleContainerAzureNodePoolMaxPodsConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerAzureNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAzureAvailabilityZone` <a name="ResetAzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```csharp
private void ResetAzureAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement"></a>

```csharp
private void ResetManagement()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAzureNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAzureNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput">AzureAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput">ManagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput">MaxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling"></a>

```csharp
public GoogleContainerAzureNodePoolAutoscalingOutputReference Autoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config"></a>

```csharp
public GoogleContainerAzureNodePoolConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management"></a>

```csharp
public GoogleContainerAzureNodePoolManagementOutputReference Management { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a>

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint"></a>

```csharp
public GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference MaxPodsConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts"></a>

```csharp
public GoogleContainerAzureNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput"></a>

```csharp
public GoogleContainerAzureNodePoolAutoscaling AutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `AzureAvailabilityZoneInput`<sup>Optional</sup> <a name="AzureAvailabilityZoneInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```csharp
public string AzureAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput"></a>

```csharp
public GoogleContainerAzureNodePoolConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput"></a>

```csharp
public GoogleContainerAzureNodePoolManagement ManagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `MaxPodsConstraintInput`<sup>Optional</sup> <a name="MaxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```csharp
public GoogleContainerAzureNodePoolMaxPodsConstraint MaxPodsConstraintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureNodePoolAutoscaling <a name="GoogleContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolAutoscaling {
    double MaxNodeCount,
    double MinNodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#max_node_count GoogleContainerAzureNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#min_node_count GoogleContainerAzureNodePool#min_node_count}

---

### GoogleContainerAzureNodePoolConfig <a name="GoogleContainerAzureNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleContainerAzureNodePoolAutoscaling Autoscaling,
    string Cluster,
    GoogleContainerAzureNodePoolConfigA Config,
    string Location,
    GoogleContainerAzureNodePoolMaxPodsConstraint MaxPodsConstraint,
    string Name,
    string SubnetId,
    string Version,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string AzureAvailabilityZone = null,
    string Id = null,
    GoogleContainerAzureNodePoolManagement Management = null,
    string Project = null,
    GoogleContainerAzureNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster">Cluster</a></code> | <code>string</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version">Version</a></code> | <code>string</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling"></a>

```csharp
public GoogleContainerAzureNodePoolAutoscaling Autoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config"></a>

```csharp
public GoogleContainerAzureNodePoolConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```csharp
public GoogleContainerAzureNodePoolMaxPodsConstraint MaxPodsConstraint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `AzureAvailabilityZone`<sup>Optional</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; set; }
```

- *Type:* string

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management"></a>

```csharp
public GoogleContainerAzureNodePoolManagement Management { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts"></a>

```csharp
public GoogleContainerAzureNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

### GoogleContainerAzureNodePoolConfigA <a name="GoogleContainerAzureNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigA {
    GoogleContainerAzureNodePoolConfigSshConfig SshConfig,
    string ImageType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleContainerAzureNodePoolConfigProxyConfig ProxyConfig = null,
    GoogleContainerAzureNodePoolConfigRootVolume RootVolume = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VmSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType">ImageType</a></code> | <code>string</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize">VmSize</a></code> | <code>string</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig"></a>

```csharp
public GoogleContainerAzureNodePoolConfigSshConfig SshConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#ssh_config GoogleContainerAzureNodePool#ssh_config}

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#image_type GoogleContainerAzureNodePool#image_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#labels GoogleContainerAzureNodePool#labels}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```csharp
public GoogleContainerAzureNodePoolConfigProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#proxy_config GoogleContainerAzureNodePool#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume"></a>

```csharp
public GoogleContainerAzureNodePoolConfigRootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#root_volume GoogleContainerAzureNodePool#root_volume}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#tags GoogleContainerAzureNodePool#tags}

---

##### `VmSize`<sup>Optional</sup> <a name="VmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#vm_size GoogleContainerAzureNodePool#vm_size}

---

### GoogleContainerAzureNodePoolConfigProxyConfig <a name="GoogleContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigProxyConfig {
    string ResourceGroupId,
    string SecretId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId">SecretId</a></code> | <code>string</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#resource_group_id GoogleContainerAzureNodePool#resource_group_id}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#secret_id GoogleContainerAzureNodePool#secret_id}

---

### GoogleContainerAzureNodePoolConfigRootVolume <a name="GoogleContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigRootVolume {
    double SizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#size_gib GoogleContainerAzureNodePool#size_gib}

---

### GoogleContainerAzureNodePoolConfigSshConfig <a name="GoogleContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigSshConfig {
    string AuthorizedKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; set; }
```

- *Type:* string

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#authorized_key GoogleContainerAzureNodePool#authorized_key}

---

### GoogleContainerAzureNodePoolManagement <a name="GoogleContainerAzureNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolManagement {
    object AutoRepair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair">AutoRepair</a></code> | <code>object</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `AutoRepair`<sup>Optional</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair"></a>

```csharp
public object AutoRepair { get; set; }
```

- *Type:* object

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#auto_repair GoogleContainerAzureNodePool#auto_repair}

---

### GoogleContainerAzureNodePoolMaxPodsConstraint <a name="GoogleContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolMaxPodsConstraint {
    double MaxPodsPerNode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | The maximum number of pods to schedule on a single node. |

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; set; }
```

- *Type:* double

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#max_pods_per_node GoogleContainerAzureNodePool#max_pods_per_node}

---

### GoogleContainerAzureNodePoolTimeouts <a name="GoogleContainerAzureNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureNodePoolAutoscalingOutputReference <a name="GoogleContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---


### GoogleContainerAzureNodePoolConfigAOutputReference <a name="GoogleContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize">ResetVmSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```csharp
private void PutProxyConfig(GoogleContainerAzureNodePoolConfigProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```csharp
private void PutRootVolume(GoogleContainerAzureNodePoolConfigRootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```csharp
private void PutSshConfig(GoogleContainerAzureNodePoolConfigSshConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmSize` <a name="ResetVmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```csharp
private void ResetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```csharp
public GoogleContainerAzureNodePoolConfigProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```csharp
public GoogleContainerAzureNodePoolConfigRootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```csharp
public GoogleContainerAzureNodePoolConfigSshConfigOutputReference SshConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```csharp
public GoogleContainerAzureNodePoolConfigProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```csharp
public GoogleContainerAzureNodePoolConfigRootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```csharp
public GoogleContainerAzureNodePoolConfigSshConfig SshConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---


### GoogleContainerAzureNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolConfigProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---


### GoogleContainerAzureNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigRootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolConfigRootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---


### GoogleContainerAzureNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolConfigSshConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">AuthorizedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedKeyInput`<sup>Optional</sup> <a name="AuthorizedKeyInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```csharp
public string AuthorizedKeyInput { get; }
```

- *Type:* string

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolConfigSshConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---


### GoogleContainerAzureNodePoolManagementOutputReference <a name="GoogleContainerAzureNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair">ResetAutoRepair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRepair` <a name="ResetAutoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair"></a>

```csharp
private void ResetAutoRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput">AutoRepairInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair">AutoRepair</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRepairInput`<sup>Optional</sup> <a name="AutoRepairInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput"></a>

```csharp
public object AutoRepairInput { get; }
```

- *Type:* object

---

##### `AutoRepair`<sup>Required</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair"></a>

```csharp
public object AutoRepair { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---


### GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```csharp
public double MaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureNodePoolMaxPodsConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAzureNodePoolTimeoutsOutputReference <a name="GoogleContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



