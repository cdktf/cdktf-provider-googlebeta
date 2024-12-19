# `googleApigeeTargetServer` Submodule <a name="`googleApigeeTargetServer` Submodule" id="@cdktf/provider-google-beta.googleApigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeTargetServer <a name="GoogleApigeeTargetServer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

new googleApigeeTargetServer.GoogleApigeeTargetServer(scope: Construct, id: string, config: GoogleApigeeTargetServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig">GoogleApigeeTargetServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig">GoogleApigeeTargetServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo">putSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo">resetSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSSlInfo` <a name="putSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo"></a>

```typescript
public putSSlInfo(value: GoogleApigeeTargetServerSSlInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeTargetServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSSlInfo` <a name="resetSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo"></a>

```typescript
public resetSSlInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeTargetServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput">sSlInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sSlInfo`<sup>Required</sup> <a name="sSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo"></a>

```typescript
public readonly sSlInfo: GoogleApigeeTargetServerSSlInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeTargetServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sSlInfoInput`<sup>Optional</sup> <a name="sSlInfoInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput"></a>

```typescript
public readonly sSlInfoInput: GoogleApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeTargetServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeTargetServerConfig <a name="GoogleApigeeTargetServerConfig" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

const googleApigeeTargetServerConfig: googleApigeeTargetServer.GoogleApigeeTargetServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host">host</a></code> | <code>string</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name">name</a></code> | <code>string</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port">port</a></code> | <code>number</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol">protocol</a></code> | <code>string</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#env_id GoogleApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#host GoogleApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#name GoogleApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#port GoogleApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#description GoogleApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#is_enabled GoogleApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocol GoogleApigeeTargetServer#protocol}

---

##### `sSlInfo`<sup>Optional</sup> <a name="sSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo"></a>

```typescript
public readonly sSlInfo: GoogleApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#s_sl_info GoogleApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeTargetServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#timeouts GoogleApigeeTargetServer#timeouts}

---

### GoogleApigeeTargetServerSSlInfo <a name="GoogleApigeeTargetServerSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

const googleApigeeTargetServerSSlInfo: googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers">ciphers</a></code> | <code>string[]</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName">commonName</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias">keyAlias</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore">keyStore</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols">protocols</a></code> | <code>string[]</code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore">trustStore</a></code> | <code>string</code> | The resource ID of the truststore. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#enabled GoogleApigeeTargetServer#enabled}

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ciphers GoogleApigeeTargetServer#ciphers}

---

##### `clientAuthEnabled`<sup>Optional</sup> <a name="clientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```typescript
public readonly clientAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#client_auth_enabled GoogleApigeeTargetServer#client_auth_enabled}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName"></a>

```typescript
public readonly commonName: GoogleApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#common_name GoogleApigeeTargetServer#common_name}

---

##### `ignoreValidationErrors`<sup>Optional</sup> <a name="ignoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```typescript
public readonly ignoreValidationErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ignore_validation_errors GoogleApigeeTargetServer#ignore_validation_errors}

---

##### `keyAlias`<sup>Optional</sup> <a name="keyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_alias GoogleApigeeTargetServer#key_alias}

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_store GoogleApigeeTargetServer#key_store}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocols GoogleApigeeTargetServer#protocols}

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#trust_store GoogleApigeeTargetServer#trust_store}

---

### GoogleApigeeTargetServerSSlInfoCommonName <a name="GoogleApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

const googleApigeeTargetServerSSlInfoCommonName: googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value">value</a></code> | <code>string</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">wildcardMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#value GoogleApigeeTargetServer#value}

---

##### `wildcardMatch`<sup>Optional</sup> <a name="wildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```typescript
public readonly wildcardMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#wildcard_match GoogleApigeeTargetServer#wildcard_match}

---

### GoogleApigeeTargetServerTimeouts <a name="GoogleApigeeTargetServerTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

const googleApigeeTargetServerTimeouts: googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeTargetServerSSlInfoCommonNameOutputReference <a name="GoogleApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

new googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">resetWildcardMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetWildcardMatch` <a name="resetWildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```typescript
public resetWildcardMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">wildcardMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">wildcardMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `wildcardMatchInput`<sup>Optional</sup> <a name="wildcardMatchInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```typescript
public readonly wildcardMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `wildcardMatch`<sup>Required</sup> <a name="wildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```typescript
public readonly wildcardMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---


### GoogleApigeeTargetServerSSlInfoOutputReference <a name="GoogleApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

new googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName">putCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">resetClientAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">resetIgnoreValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">resetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore">resetKeyStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonName` <a name="putCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```typescript
public putCommonName(value: GoogleApigeeTargetServerSSlInfoCommonName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---

##### `resetCiphers` <a name="resetCiphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```typescript
public resetCiphers(): void
```

##### `resetClientAuthEnabled` <a name="resetClientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```typescript
public resetClientAuthEnabled(): void
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetIgnoreValidationErrors` <a name="resetIgnoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```typescript
public resetIgnoreValidationErrors(): void
```

##### `resetKeyAlias` <a name="resetKeyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```typescript
public resetKeyAlias(): void
```

##### `resetKeyStore` <a name="resetKeyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```typescript
public resetKeyStore(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```typescript
public resetTrustStore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName">commonName</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">clientAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">commonNameInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">ignoreValidationErrorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">keyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">keyStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias">keyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore">keyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore">trustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```typescript
public readonly commonName: GoogleApigeeTargetServerSSlInfoCommonNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `clientAuthEnabledInput`<sup>Optional</sup> <a name="clientAuthEnabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```typescript
public readonly clientAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: GoogleApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreValidationErrorsInput`<sup>Optional</sup> <a name="ignoreValidationErrorsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```typescript
public readonly ignoreValidationErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```typescript
public readonly keyAliasInput: string;
```

- *Type:* string

---

##### `keyStoreInput`<sup>Optional</sup> <a name="keyStoreInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```typescript
public readonly keyStoreInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```typescript
public readonly trustStoreInput: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `clientAuthEnabled`<sup>Required</sup> <a name="clientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```typescript
public readonly clientAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreValidationErrors`<sup>Required</sup> <a name="ignoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```typescript
public readonly ignoreValidationErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---


### GoogleApigeeTargetServerTimeoutsOutputReference <a name="GoogleApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeTargetServer } from '@cdktf/provider-google-beta'

new googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeTargetServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

---



