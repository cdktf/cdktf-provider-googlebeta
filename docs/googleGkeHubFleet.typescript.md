# `googleGkeHubFleet` Submodule <a name="`googleGkeHubFleet` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFleet <a name="GoogleGkeHubFleet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet google_gke_hub_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleet(scope: Construct, id: string, config?: GoogleGkeHubFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig">GoogleGkeHubFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig">GoogleGkeHubFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig">putDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDefaultClusterConfig">resetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultClusterConfig` <a name="putDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig"></a>

```typescript
public putDefaultClusterConfig(value: GoogleGkeHubFleetDefaultClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeHubFleetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

---

##### `resetDefaultClusterConfig` <a name="resetDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDefaultClusterConfig"></a>

```typescript
public resetDefaultClusterConfig(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

googleGkeHubFleet.GoogleGkeHubFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeHubFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfig">defaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList">GoogleGkeHubFleetStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference">GoogleGkeHubFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfigInput">defaultClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultClusterConfig`<sup>Required</sup> <a name="defaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfig"></a>

```typescript
public readonly defaultClusterConfig: GoogleGkeHubFleetDefaultClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigOutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.state"></a>

```typescript
public readonly state: GoogleGkeHubFleetStateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList">GoogleGkeHubFleetStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubFleetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference">GoogleGkeHubFleetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `defaultClusterConfigInput`<sup>Optional</sup> <a name="defaultClusterConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfigInput"></a>

```typescript
public readonly defaultClusterConfigInput: GoogleGkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeHubFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFleetConfig <a name="GoogleGkeHubFleetConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetConfig: googleGkeHubFleet.GoogleGkeHubFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.defaultClusterConfig">defaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | default_cluster_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-assigned display name of the Fleet. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#id GoogleGkeHubFleet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#project GoogleGkeHubFleet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultClusterConfig`<sup>Optional</sup> <a name="defaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.defaultClusterConfig"></a>

```typescript
public readonly defaultClusterConfig: GoogleGkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

default_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#default_cluster_config GoogleGkeHubFleet#default_cluster_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-assigned display name of the Fleet.

When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#display_name GoogleGkeHubFleet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#id GoogleGkeHubFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#project GoogleGkeHubFleet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubFleetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#timeouts GoogleGkeHubFleet#timeouts}

---

### GoogleGkeHubFleetDefaultClusterConfig <a name="GoogleGkeHubFleetDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetDefaultClusterConfig: googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig">binaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | binary_authorization_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | security_posture_config block. |

---

##### `binaryAuthorizationConfig`<sup>Optional</sup> <a name="binaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig"></a>

```typescript
public readonly binaryAuthorizationConfig: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

binary_authorization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#binary_authorization_config GoogleGkeHubFleet#binary_authorization_config}

---

##### `securityPostureConfig`<sup>Optional</sup> <a name="securityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#security_posture_config GoogleGkeHubFleet#security_posture_config}

---

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig: googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings">policyBindings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | policy_bindings block. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#evaluation_mode GoogleGkeHubFleet#evaluation_mode}

---

##### `policyBindings`<sup>Optional</sup> <a name="policyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings"></a>

```typescript
public readonly policyBindings: IResolvable | GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#policy_bindings GoogleGkeHubFleet#policy_bindings}

---

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings: googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name">name</a></code> | <code>string</code> | The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#name GoogleGkeHubFleet#name}

---

### GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig <a name="GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetDefaultClusterConfigSecurityPostureConfig: googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode">mode</a></code> | <code>string</code> | Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#mode GoogleGkeHubFleet#mode}

---

##### `vulnerabilityMode`<sup>Optional</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#vulnerability_mode GoogleGkeHubFleet#vulnerability_mode}

---

### GoogleGkeHubFleetState <a name="GoogleGkeHubFleetState" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetState: googleGkeHubFleet.GoogleGkeHubFleetState = { ... }
```


### GoogleGkeHubFleetTimeouts <a name="GoogleGkeHubFleetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

const googleGkeHubFleetTimeouts: googleGkeHubFleet.GoogleGkeHubFleetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#create GoogleGkeHubFleet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#delete GoogleGkeHubFleet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#update GoogleGkeHubFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#create GoogleGkeHubFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#delete GoogleGkeHubFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_gke_hub_fleet#update GoogleGkeHubFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings">putPolicyBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings">resetPolicyBindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyBindings` <a name="putPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings"></a>

```typescript
public putPolicyBindings(value: IResolvable | GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode"></a>

```typescript
public resetEvaluationMode(): void
```

##### `resetPolicyBindings` <a name="resetPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings"></a>

```typescript
public resetPolicyBindings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings">policyBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput">policyBindingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyBindings`<sup>Required</sup> <a name="policyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings"></a>

```typescript
public readonly policyBindings: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a>

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `policyBindingsInput`<sup>Optional</sup> <a name="policyBindingsInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput"></a>

```typescript
public readonly policyBindingsInput: IResolvable | GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---


### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get"></a>

```typescript
public get(index: number): GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---


### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>

---


### GoogleGkeHubFleetDefaultClusterConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig">putBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig">putSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig">resetBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig">resetSecurityPostureConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBinaryAuthorizationConfig` <a name="putBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig"></a>

```typescript
public putBinaryAuthorizationConfig(value: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `putSecurityPostureConfig` <a name="putSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig"></a>

```typescript
public putSecurityPostureConfig(value: GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `resetBinaryAuthorizationConfig` <a name="resetBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig"></a>

```typescript
public resetBinaryAuthorizationConfig(): void
```

##### `resetSecurityPostureConfig` <a name="resetSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig"></a>

```typescript
public resetSecurityPostureConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig">binaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput">binaryAuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput">securityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAuthorizationConfig`<sup>Required</sup> <a name="binaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig"></a>

```typescript
public readonly binaryAuthorizationConfig: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a>

---

##### `securityPostureConfig`<sup>Required</sup> <a name="securityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a>

---

##### `binaryAuthorizationConfigInput`<sup>Optional</sup> <a name="binaryAuthorizationConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput"></a>

```typescript
public readonly binaryAuthorizationConfigInput: GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `securityPostureConfigInput`<sup>Optional</sup> <a name="securityPostureConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput"></a>

```typescript
public readonly securityPostureConfigInput: GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---


### GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode">resetVulnerabilityMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetVulnerabilityMode` <a name="resetVulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode"></a>

```typescript
public resetVulnerabilityMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `vulnerabilityModeInput`<sup>Optional</sup> <a name="vulnerabilityModeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```typescript
public readonly vulnerabilityModeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---


### GoogleGkeHubFleetStateList <a name="GoogleGkeHubFleetStateList" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get"></a>

```typescript
public get(index: number): GoogleGkeHubFleetStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeHubFleetStateOutputReference <a name="GoogleGkeHubFleetStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState">GoogleGkeHubFleetState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubFleetState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState">GoogleGkeHubFleetState</a>

---


### GoogleGkeHubFleetTimeoutsOutputReference <a name="GoogleGkeHubFleetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubFleet } from '@cdktf/provider-google-beta'

new googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

---



