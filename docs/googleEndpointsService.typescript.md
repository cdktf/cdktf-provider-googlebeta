# `googleEndpointsService` Submodule <a name="`googleEndpointsService` Submodule" id="@cdktf/provider-google-beta.googleEndpointsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEndpointsService <a name="GoogleEndpointsService" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service google_endpoints_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsService(scope: Construct, id: string, config: GoogleEndpointsServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig">GoogleEndpointsServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig">GoogleEndpointsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetGrpcConfig">resetGrpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetOpenapiConfig">resetOpenapiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetProtocOutputBase64">resetProtocOutputBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEndpointsServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a>

---

##### `resetGrpcConfig` <a name="resetGrpcConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetGrpcConfig"></a>

```typescript
public resetGrpcConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenapiConfig` <a name="resetOpenapiConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetOpenapiConfig"></a>

```typescript
public resetOpenapiConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocOutputBase64` <a name="resetProtocOutputBase64" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetProtocOutputBase64"></a>

```typescript
public resetProtocOutputBase64(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEndpointsService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isConstruct"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

googleEndpointsService.GoogleEndpointsService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformElement"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

googleEndpointsService.GoogleEndpointsService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformResource"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

googleEndpointsService.GoogleEndpointsService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

googleEndpointsService.GoogleEndpointsService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleEndpointsService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEndpointsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEndpointsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEndpointsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.apis">apis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList">GoogleEndpointsServiceApisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.dnsAddress">dnsAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList">GoogleEndpointsServiceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference">GoogleEndpointsServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.grpcConfigInput">grpcConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.openapiConfigInput">openapiConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.protocOutputBase64Input">protocOutputBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.grpcConfig">grpcConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.openapiConfig">openapiConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.protocOutputBase64">protocOutputBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apis`<sup>Required</sup> <a name="apis" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.apis"></a>

```typescript
public readonly apis: GoogleEndpointsServiceApisList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList">GoogleEndpointsServiceApisList</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `dnsAddress`<sup>Required</sup> <a name="dnsAddress" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.dnsAddress"></a>

```typescript
public readonly dnsAddress: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleEndpointsServiceEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList">GoogleEndpointsServiceEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEndpointsServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference">GoogleEndpointsServiceTimeoutsOutputReference</a>

---

##### `grpcConfigInput`<sup>Optional</sup> <a name="grpcConfigInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.grpcConfigInput"></a>

```typescript
public readonly grpcConfigInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `openapiConfigInput`<sup>Optional</sup> <a name="openapiConfigInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.openapiConfigInput"></a>

```typescript
public readonly openapiConfigInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocOutputBase64Input`<sup>Optional</sup> <a name="protocOutputBase64Input" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.protocOutputBase64Input"></a>

```typescript
public readonly protocOutputBase64Input: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEndpointsServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a>

---

##### `grpcConfig`<sup>Required</sup> <a name="grpcConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.grpcConfig"></a>

```typescript
public readonly grpcConfig: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `openapiConfig`<sup>Required</sup> <a name="openapiConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.openapiConfig"></a>

```typescript
public readonly openapiConfig: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocOutputBase64`<sup>Required</sup> <a name="protocOutputBase64" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.protocOutputBase64"></a>

```typescript
public readonly protocOutputBase64: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEndpointsServiceApis <a name="GoogleEndpointsServiceApis" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApis.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

const googleEndpointsServiceApis: googleEndpointsService.GoogleEndpointsServiceApis = { ... }
```


### GoogleEndpointsServiceApisMethods <a name="GoogleEndpointsServiceApisMethods" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethods.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

const googleEndpointsServiceApisMethods: googleEndpointsService.GoogleEndpointsServiceApisMethods = { ... }
```


### GoogleEndpointsServiceConfig <a name="GoogleEndpointsServiceConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

const googleEndpointsServiceConfig: googleEndpointsService.GoogleEndpointsServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. Usually of the form $apiname.endpoints.$projectid.cloud.goog. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.grpcConfig">grpcConfig</a></code> | <code>string</code> | The full text of the Service Config YAML file (Example located here). |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#id GoogleEndpointsService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.openapiConfig">openapiConfig</a></code> | <code>string</code> | The full text of the OpenAPI YAML configuration as described here. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.project">project</a></code> | <code>string</code> | The project ID that the service belongs to. If not provided, provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.protocOutputBase64">protocOutputBase64</a></code> | <code>string</code> | The full contents of the Service Descriptor File generated by protoc. This should be a compiled .pb file, base64-encoded. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service. Usually of the form $apiname.endpoints.$projectid.cloud.goog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#service_name GoogleEndpointsService#service_name}

---

##### `grpcConfig`<sup>Optional</sup> <a name="grpcConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.grpcConfig"></a>

```typescript
public readonly grpcConfig: string;
```

- *Type:* string

The full text of the Service Config YAML file (Example located here).

If provided, must also provide protoc_output_base64. open_api config must not be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#grpc_config GoogleEndpointsService#grpc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#id GoogleEndpointsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openapiConfig`<sup>Optional</sup> <a name="openapiConfig" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.openapiConfig"></a>

```typescript
public readonly openapiConfig: string;
```

- *Type:* string

The full text of the OpenAPI YAML configuration as described here.

Either this, or both of grpc_config and protoc_output_base64 must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#openapi_config GoogleEndpointsService#openapi_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID that the service belongs to. If not provided, provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#project GoogleEndpointsService#project}

---

##### `protocOutputBase64`<sup>Optional</sup> <a name="protocOutputBase64" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.protocOutputBase64"></a>

```typescript
public readonly protocOutputBase64: string;
```

- *Type:* string

The full contents of the Service Descriptor File generated by protoc. This should be a compiled .pb file, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#protoc_output_base64 GoogleEndpointsService#protoc_output_base64}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEndpointsServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#timeouts GoogleEndpointsService#timeouts}

---

### GoogleEndpointsServiceEndpoints <a name="GoogleEndpointsServiceEndpoints" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpoints.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

const googleEndpointsServiceEndpoints: googleEndpointsService.GoogleEndpointsServiceEndpoints = { ... }
```


### GoogleEndpointsServiceTimeouts <a name="GoogleEndpointsServiceTimeouts" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

const googleEndpointsServiceTimeouts: googleEndpointsService.GoogleEndpointsServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#create GoogleEndpointsService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#delete GoogleEndpointsService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#update GoogleEndpointsService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#create GoogleEndpointsService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#delete GoogleEndpointsService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_endpoints_service#update GoogleEndpointsService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEndpointsServiceApisList <a name="GoogleEndpointsServiceApisList" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceApisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.get"></a>

```typescript
public get(index: number): GoogleEndpointsServiceApisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleEndpointsServiceApisMethodsList <a name="GoogleEndpointsServiceApisMethodsList" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceApisMethodsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.get"></a>

```typescript
public get(index: number): GoogleEndpointsServiceApisMethodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleEndpointsServiceApisMethodsOutputReference <a name="GoogleEndpointsServiceApisMethodsOutputReference" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.responseType">responseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.syntax">syntax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethods">GoogleEndpointsServiceApisMethods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

---

##### `syntax`<sup>Required</sup> <a name="syntax" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.syntax"></a>

```typescript
public readonly syntax: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEndpointsServiceApisMethods;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethods">GoogleEndpointsServiceApisMethods</a>

---


### GoogleEndpointsServiceApisOutputReference <a name="GoogleEndpointsServiceApisOutputReference" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceApisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.methods">methods</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList">GoogleEndpointsServiceApisMethodsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.syntax">syntax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApis">GoogleEndpointsServiceApis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.methods"></a>

```typescript
public readonly methods: GoogleEndpointsServiceApisMethodsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisMethodsList">GoogleEndpointsServiceApisMethodsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `syntax`<sup>Required</sup> <a name="syntax" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.syntax"></a>

```typescript
public readonly syntax: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEndpointsServiceApis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceApis">GoogleEndpointsServiceApis</a>

---


### GoogleEndpointsServiceEndpointsList <a name="GoogleEndpointsServiceEndpointsList" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.get"></a>

```typescript
public get(index: number): GoogleEndpointsServiceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleEndpointsServiceEndpointsOutputReference <a name="GoogleEndpointsServiceEndpointsOutputReference" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpoints">GoogleEndpointsServiceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEndpointsServiceEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceEndpoints">GoogleEndpointsServiceEndpoints</a>

---


### GoogleEndpointsServiceTimeoutsOutputReference <a name="GoogleEndpointsServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEndpointsService } from '@cdktf/provider-google-beta'

new googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEndpointsServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEndpointsService.GoogleEndpointsServiceTimeouts">GoogleEndpointsServiceTimeouts</a>

---



