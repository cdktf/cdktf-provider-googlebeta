# `googleNetworkServicesLbRouteExtension` Submodule <a name="`googleNetworkServicesLbRouteExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbRouteExtension <a name="GoogleNetworkServicesLbRouteExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtension(Construct Scope, string Id, GoogleNetworkServicesLbRouteExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains"></a>

```csharp
private void PutExtensionChains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesLbRouteExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesLbRouteExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput">ForwardingRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules">ForwardingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsList ExtensionChains { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```csharp
public object ExtensionChainsInput { get; }
```

- *Type:* object

---

##### `ForwardingRulesInput`<sup>Optional</sup> <a name="ForwardingRulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```csharp
public string[] ForwardingRulesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```csharp
public string LoadBalancingSchemeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules"></a>

```csharp
public string[] ForwardingRules { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbRouteExtensionConfig <a name="GoogleNetworkServicesLbRouteExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ExtensionChains,
    string[] ForwardingRules,
    string LoadBalancingScheme,
    string Location,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesLbRouteExtensionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>object</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules">ForwardingRules</a></code> | <code>string[]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location">Location</a></code> | <code>string</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name">Name</a></code> | <code>string</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```csharp
public object ExtensionChains { get; set; }
```

- *Type:* object

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#extension_chains GoogleNetworkServicesLbRouteExtension#extension_chains}

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```csharp
public string[] ForwardingRules { get; set; }
```

- *Type:* string[]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#forwarding_rules GoogleNetworkServicesLbRouteExtension#forwarding_rules}

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; set; }
```

- *Type:* string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#load_balancing_scheme GoogleNetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#location GoogleNetworkServicesLbRouteExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#description GoogleNetworkServicesLbRouteExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#labels GoogleNetworkServicesLbRouteExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#timeouts GoogleNetworkServicesLbRouteExtension#timeouts}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChains <a name="GoogleNetworkServicesLbRouteExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChains {
    object Extensions,
    GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchCondition,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>object</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name">Name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```csharp
public object Extensions { get; set; }
```

- *Type:* object

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#extensions GoogleNetworkServicesLbRouteExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#match_condition GoogleNetworkServicesLbRouteExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions {
    string Name,
    string Service,
    string Authority = null,
    object FailOpen = null,
    string[] ForwardHeaders = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>string</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">Authority</a></code> | <code>string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>object</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">Timeout</a></code> | <code>string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#service GoogleNetworkServicesLbRouteExtension#service}

---

##### `Authority`<sup>Optional</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```csharp
public string Authority { get; set; }
```

- *Type:* string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#authority GoogleNetworkServicesLbRouteExtension#authority}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

```csharp
public object FailOpen { get; set; }
```

- *Type:* object

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#fail_open GoogleNetworkServicesLbRouteExtension#fail_open}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; set; }
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#forward_headers GoogleNetworkServicesLbRouteExtension#forward_headers}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#timeout GoogleNetworkServicesLbRouteExtension#timeout}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition {
    string CelExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```csharp
public string CelExpression { get; set; }
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#cel_expression GoogleNetworkServicesLbRouteExtension#cel_expression}

---

### GoogleNetworkServicesLbRouteExtensionTimeouts <a name="GoogleNetworkServicesLbRouteExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```csharp
private GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">ResetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthority` <a name="ResetAuthority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```csharp
private void ResetAuthority()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```csharp
private void ResetForwardHeaders()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">Authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```csharp
public string AuthorityInput { get; }
```

- *Type:* string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```csharp
public object FailOpenInput { get; }
```

- *Type:* object

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```csharp
public string[] ForwardHeadersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```csharp
public string Authority { get; }
```

- *Type:* string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```csharp
public object FailOpen { get; }
```

- *Type:* object

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```csharp
private GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```csharp
public string CelExpressionInput { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```csharp
public string CelExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```csharp
private void PutExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```csharp
private void PutMatchCondition(GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList Extensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference MatchCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```csharp
public object ExtensionsInput { get; }
```

- *Type:* object

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



