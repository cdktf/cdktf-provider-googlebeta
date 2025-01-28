# `googleComputeNetworkEdgeSecurityService` Submodule <a name="`googleComputeNetworkEdgeSecurityService` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkEdgeSecurityService <a name="GoogleComputeNetworkEdgeSecurityService" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service google_compute_network_edge_security_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkEdgeSecurityService(Construct Scope, string Id, GoogleComputeNetworkEdgeSecurityServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig">GoogleComputeNetworkEdgeSecurityServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig">GoogleComputeNetworkEdgeSecurityServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeNetworkEdgeSecurityServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkEdgeSecurityService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkEdgeSecurityService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkEdgeSecurityService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkEdgeSecurityService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkEdgeSecurityService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeNetworkEdgeSecurityService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkEdgeSecurityService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkEdgeSecurityService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkEdgeSecurityService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId">SelfLinkWithServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithServiceId`<sup>Required</sup> <a name="SelfLinkWithServiceId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId"></a>

```csharp
public string SelfLinkWithServiceId { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeouts"></a>

```csharp
public GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkEdgeSecurityServiceConfig <a name="GoogleComputeNetworkEdgeSecurityServiceConfig" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkEdgeSecurityServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    string Region = null,
    string SecurityPolicy = null,
    GoogleComputeNetworkEdgeSecurityServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.description">Description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#id GoogleComputeNetworkEdgeSecurityService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#project GoogleComputeNetworkEdgeSecurityService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.region">Region</a></code> | <code>string</code> | The region of the gateway security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | The resource URL for the network edge security service associated with this network edge security service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#name GoogleComputeNetworkEdgeSecurityService#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#description GoogleComputeNetworkEdgeSecurityService#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#id GoogleComputeNetworkEdgeSecurityService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#project GoogleComputeNetworkEdgeSecurityService#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#region GoogleComputeNetworkEdgeSecurityService#region}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

The resource URL for the network edge security service associated with this network edge security service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#security_policy GoogleComputeNetworkEdgeSecurityService#security_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.timeouts"></a>

```csharp
public GoogleComputeNetworkEdgeSecurityServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#timeouts GoogleComputeNetworkEdgeSecurityService#timeouts}

---

### GoogleComputeNetworkEdgeSecurityServiceTimeouts <a name="GoogleComputeNetworkEdgeSecurityServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkEdgeSecurityServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#create GoogleComputeNetworkEdgeSecurityService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#delete GoogleComputeNetworkEdgeSecurityService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#update GoogleComputeNetworkEdgeSecurityService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#create GoogleComputeNetworkEdgeSecurityService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#delete GoogleComputeNetworkEdgeSecurityService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_edge_security_service#update GoogleComputeNetworkEdgeSecurityService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference <a name="GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



