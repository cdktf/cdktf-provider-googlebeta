# `googleComputeNetworkPeeringRoutesConfig` Submodule <a name="`googleComputeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeeringRoutesConfig <a name="GoogleComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

new googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig(scope: Construct, id: string, config: GoogleComputeNetworkPeeringRoutesConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp">resetExportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp">resetImportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeNetworkPeeringRoutesConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `resetExportSubnetRoutesWithPublicIp` <a name="resetExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp"></a>

```typescript
public resetExportSubnetRoutesWithPublicIp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportSubnetRoutesWithPublicIp` <a name="resetImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp"></a>

```typescript
public resetImportSubnetRoutesWithPublicIp(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkPeeringRoutesConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput">exportSubnetRoutesWithPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput">importSubnetRoutesWithPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput">peeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering">peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```typescript
public readonly exportCustomRoutesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput"></a>

```typescript
public readonly exportSubnetRoutesWithPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```typescript
public readonly importCustomRoutesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput"></a>

```typescript
public readonly importSubnetRoutesWithPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```typescript
public readonly peeringInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```typescript
public readonly exportCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp"></a>

```typescript
public readonly exportSubnetRoutesWithPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```typescript
public readonly importCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp"></a>

```typescript
public readonly importSubnetRoutesWithPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringRoutesConfigConfig <a name="GoogleComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

const googleComputeNetworkPeeringRoutesConfigConfig: googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network">network</a></code> | <code>string</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering">peering</a></code> | <code>string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether subnet routes with public IP range are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether subnet routes with public IP range are imported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```typescript
public readonly exportCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#export_custom_routes GoogleComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```typescript
public readonly importCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#import_custom_routes GoogleComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#network GoogleComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#peering GoogleComputeNetworkPeeringRoutesConfig#peering}

---

##### `exportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp"></a>

```typescript
public readonly exportSubnetRoutesWithPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether subnet routes with public IP range are exported.

IPv4 special-use ranges are always exported to peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#export_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#export_subnet_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp"></a>

```typescript
public readonly importSubnetRoutesWithPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether subnet routes with public IP range are imported.

IPv4 special-use ranges are always imported from peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#import_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#import_subnet_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#timeouts GoogleComputeNetworkPeeringRoutesConfig#timeouts}

---

### GoogleComputeNetworkPeeringRoutesConfigTimeouts <a name="GoogleComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

const googleComputeNetworkPeeringRoutesConfigTimeouts: googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkPeeringRoutesConfig } from '@cdktf/provider-google-beta'

new googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---



