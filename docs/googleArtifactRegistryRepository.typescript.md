# `googleArtifactRegistryRepository` Submodule <a name="`googleArtifactRegistryRepository` Submodule" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRepository <a name="GoogleArtifactRegistryRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

new googleArtifactRegistryRepository.GoogleArtifactRegistryRepository(scope: Construct, id: string, config: GoogleArtifactRegistryRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig">GoogleArtifactRegistryRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig">GoogleArtifactRegistryRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig">putMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig">resetMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMavenConfig` <a name="putMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig"></a>

```typescript
public putMavenConfig(value: GoogleArtifactRegistryRepositoryMavenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleArtifactRegistryRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMavenConfig` <a name="resetMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig"></a>

```typescript
public resetMavenConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput">mavenConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `mavenConfig`<sup>Required</sup> <a name="mavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig"></a>

```typescript
public readonly mavenConfig: GoogleArtifactRegistryRepositoryMavenConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleArtifactRegistryRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mavenConfigInput`<sup>Optional</sup> <a name="mavenConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput"></a>

```typescript
public readonly mavenConfigInput: GoogleArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleArtifactRegistryRepositoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRepositoryConfig <a name="GoogleArtifactRegistryRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

const googleArtifactRegistryRepositoryConfig: googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format">format</a></code> | <code>string</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description">description</a></code> | <code>string</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location">location</a></code> | <code>string</code> | The name of the location this repository is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#format GoogleArtifactRegistryRepository#format}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#repository_id GoogleArtifactRegistryRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#kms_key_name GoogleArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#labels GoogleArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this repository is located in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#location GoogleArtifactRegistryRepository#location}

---

##### `mavenConfig`<sup>Optional</sup> <a name="mavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```typescript
public readonly mavenConfig: GoogleArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#maven_config GoogleArtifactRegistryRepository#maven_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleArtifactRegistryRepositoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#timeouts GoogleArtifactRegistryRepository#timeouts}

---

### GoogleArtifactRegistryRepositoryMavenConfig <a name="GoogleArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

const googleArtifactRegistryRepositoryMavenConfig: googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy">versionPolicy</a></code> | <code>string</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `allowSnapshotOverwrites`<sup>Optional</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```typescript
public readonly allowSnapshotOverwrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#allow_snapshot_overwrites GoogleArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `versionPolicy`<sup>Optional</sup> <a name="versionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```typescript
public readonly versionPolicy: string;
```

- *Type:* string

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#version_policy GoogleArtifactRegistryRepository#version_policy}

---

### GoogleArtifactRegistryRepositoryTimeouts <a name="GoogleArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

const googleArtifactRegistryRepositoryTimeouts: googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryRepositoryMavenConfigOutputReference <a name="GoogleArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

new googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites">resetAllowSnapshotOverwrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy">resetVersionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSnapshotOverwrites` <a name="resetAllowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```typescript
public resetAllowSnapshotOverwrites(): void
```

##### `resetVersionPolicy` <a name="resetVersionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```typescript
public resetVersionPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">allowSnapshotOverwritesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">versionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">versionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSnapshotOverwritesInput`<sup>Optional</sup> <a name="allowSnapshotOverwritesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```typescript
public readonly allowSnapshotOverwritesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionPolicyInput`<sup>Optional</sup> <a name="versionPolicyInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```typescript
public readonly versionPolicyInput: string;
```

- *Type:* string

---

##### `allowSnapshotOverwrites`<sup>Required</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```typescript
public readonly allowSnapshotOverwrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionPolicy`<sup>Required</sup> <a name="versionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```typescript
public readonly versionPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---


### GoogleArtifactRegistryRepositoryTimeoutsOutputReference <a name="GoogleArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleArtifactRegistryRepository } from '@cdktf/provider-google-beta'

new googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleArtifactRegistryRepositoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a> | cdktf.IResolvable

---



