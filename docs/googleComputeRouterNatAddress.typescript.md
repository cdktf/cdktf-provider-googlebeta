# `googleComputeRouterNatAddress` Submodule <a name="`googleComputeRouterNatAddress` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNatAddress <a name="GoogleComputeRouterNatAddress" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address google_compute_router_nat_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

new googleComputeRouterNatAddress.GoogleComputeRouterNatAddress(scope: Construct, id: string, config: GoogleComputeRouterNatAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig">GoogleComputeRouterNatAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig">GoogleComputeRouterNatAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetDrainNatIps">resetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRouterNatAddressTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---

##### `resetDrainNatIps` <a name="resetDrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetDrainNatIps"></a>

```typescript
public resetDrainNatIps(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNatAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRouterNatAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRouterNatAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRouterNatAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNatAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference">GoogleComputeRouterNatAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIpsInput">drainNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIpsInput">natIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNatInput">routerNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIps">natIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNat">routerNat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterNatAddressTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference">GoogleComputeRouterNatAddressTimeoutsOutputReference</a>

---

##### `drainNatIpsInput`<sup>Optional</sup> <a name="drainNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIpsInput"></a>

```typescript
public readonly drainNatIpsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `natIpsInput`<sup>Optional</sup> <a name="natIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIpsInput"></a>

```typescript
public readonly natIpsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `routerNatInput`<sup>Optional</sup> <a name="routerNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNatInput"></a>

```typescript
public readonly routerNatInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRouterNatAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---

##### `drainNatIps`<sup>Required</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `routerNat`<sup>Required</sup> <a name="routerNat" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNat"></a>

```typescript
public readonly routerNat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatAddressConfig <a name="GoogleComputeRouterNatAddressConfig" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.Initializer"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

const googleComputeRouterNatAddressConfig: googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.natIps">natIps</a></code> | <code>string[]</code> | Self-links of NAT IPs to be used in a Nat service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which the referenced NAT service is configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.routerNat">routerNat</a></code> | <code>string</code> | The name of the Nat service in which this address will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.region">region</a></code> | <code>string</code> | Region where the NAT service reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

Self-links of NAT IPs to be used in a Nat service.

Only valid if the referenced RouterNat
natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#nat_ips GoogleComputeRouterNatAddress#nat_ips}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which the referenced NAT service is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#router GoogleComputeRouterNatAddress#router}

---

##### `routerNat`<sup>Required</sup> <a name="routerNat" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.routerNat"></a>

```typescript
public readonly routerNat: string;
```

- *Type:* string

The name of the Nat service in which this address will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#router_nat GoogleComputeRouterNatAddress#router_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#drain_nat_ips GoogleComputeRouterNatAddress#drain_nat_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the NAT service reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#region GoogleComputeRouterNatAddress#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterNatAddressTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#timeouts GoogleComputeRouterNatAddress#timeouts}

---

### GoogleComputeRouterNatAddressTimeouts <a name="GoogleComputeRouterNatAddressTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.Initializer"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

const googleComputeRouterNatAddressTimeouts: googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#create GoogleComputeRouterNatAddress#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#delete GoogleComputeRouterNatAddress#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#update GoogleComputeRouterNatAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#create GoogleComputeRouterNatAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#delete GoogleComputeRouterNatAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_router_nat_address#update GoogleComputeRouterNatAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatAddressTimeoutsOutputReference <a name="GoogleComputeRouterNatAddressTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNatAddress } from '@cdktf/provider-google-beta'

new googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---



