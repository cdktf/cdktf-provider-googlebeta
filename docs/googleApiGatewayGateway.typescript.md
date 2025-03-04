# `googleApiGatewayGateway` Submodule <a name="`googleApiGatewayGateway` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayGateway <a name="GoogleApiGatewayGateway" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway google_api_gateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

new googleApiGatewayGateway.GoogleApiGatewayGateway(scope: Construct, id: string, config: GoogleApiGatewayGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig">GoogleApiGatewayGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig">GoogleApiGatewayGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApiGatewayGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApiGatewayGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApiGatewayGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApiGatewayGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApiGatewayGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference">GoogleApiGatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfigInput">apiConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfig">apiConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApiGatewayGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference">GoogleApiGatewayGatewayTimeoutsOutputReference</a>

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfigInput"></a>

```typescript
public readonly apiConfigInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApiGatewayGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayGatewayConfig <a name="GoogleApiGatewayGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.Initializer"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

const googleApiGatewayGatewayConfig: googleApiGatewayGateway.GoogleApiGatewayGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.apiConfig">apiConfig</a></code> | <code>string</code> | Resource name of the API Config for this Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.region">region</a></code> | <code>string</code> | The region of the gateway for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

Resource name of the API Config for this Gateway.

Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
[lifecycle](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle) rule 'create_before_destroy' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#api_config GoogleApiGatewayGateway#api_config}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#gateway_id GoogleApiGatewayGateway#gateway_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#display_name GoogleApiGatewayGateway#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#labels GoogleApiGatewayGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the gateway for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#region GoogleApiGatewayGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApiGatewayGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#timeouts GoogleApiGatewayGateway#timeouts}

---

### GoogleApiGatewayGatewayTimeouts <a name="GoogleApiGatewayGatewayTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.Initializer"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

const googleApiGatewayGatewayTimeouts: googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#create GoogleApiGatewayGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#delete GoogleApiGatewayGateway#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#update GoogleApiGatewayGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#create GoogleApiGatewayGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#delete GoogleApiGatewayGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_api_gateway_gateway#update GoogleApiGatewayGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayGatewayTimeoutsOutputReference <a name="GoogleApiGatewayGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApiGatewayGateway } from '@cdktf/provider-google-beta'

new googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApiGatewayGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---



